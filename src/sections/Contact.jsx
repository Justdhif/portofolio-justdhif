import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import Notification from "../components/Notification";
import SocialLinks from "../components/SocialLinks";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const formRef = useRef(null);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });

    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_xefwstf",
        "template_tgf5kai",
        {
          from_name: formData.name,
          to_name: "Justdhif",
          from_email: formData.email,
          to_email: "justdhif418@gmail",
          message: formData.message,
        },
        "fafKKYW9GFTrxFYv3"
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showNotification("success", "Message transmitted successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
      showNotification("error", "Transmission failed. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center min-h-screen px-4 py-20 overflow-hidden"
    >

      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Notification notification={notification} />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-2xl bg-gray-900/80 border border-gray-700/50 backdrop-blur-lg shadow-2xl overflow-hidden"
        >
          {/* Space-themed decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
          <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-indigo-400/80 animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-400/80 animate-pulse delay-300"></div>

          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                Contact Me
              </h2>
              <p className="text-gray-300/80 font-light mt-2">
                Send a message or connect with me through these platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <ContactForm
                  formData={formData}
                  handleChange={handleChange}
                  activeField={activeField}
                  setActiveField={setActiveField}
                  isLoading={isLoading}
                  handleSubmit={handleSubmit}
                />
              </div>

              {/* Social Media Section */}
              <div className="flex flex-col">
                <SocialLinks />
                <ContactInfo />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
