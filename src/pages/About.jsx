import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px] rounded-lg"
          src={assets.about_image}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to MediConnect, where healthcare meets innovation. Our
            mission is to provide a seamless and efficient way for patients to
            connect with trusted medical professionals while ensuring
            convenience and accessibility at every step.
          </p>
          <p>
            At MediConnect, we leverage cutting-edge technology to streamline
            appointment booking, manage health records, and facilitate
            hassle-free healthcare services. Our platform is designed to put you
            in control of your health journey with ease and efficiency.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision is to revolutionize healthcare accessibility, bridging
            the gap between patients and medical professionals. We strive to
            create a healthcare ecosystem where quality care is just a click
            away, empowering individuals to take charge of their well-being.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b className="uppercase">Innovation:</b>
          <p className="capitalize">
            We integrate the latest technology to enhance your healthcare
            experience.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b className="uppercase">Accessibility:</b>
          <p>
            Connect with top doctors and specialists from anywhere, anytime.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b className="uppercase">Reliability:</b>
          <p>
            A trusted platform ensuring secure and hassle-free medical
            consultations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
