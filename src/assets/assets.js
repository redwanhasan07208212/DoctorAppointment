import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Mahmudul Hasan",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS, FCPS (Medicine)",
    experience: "10 Years",
    about:
      "Dr. Mahmudul Hasan is a highly experienced general physician with over a decade of practice in primary healthcare. He specializes in diagnosing and treating common illnesses, infections, and chronic conditions such as diabetes, hypertension, and respiratory disorders. Dr. Hasan is known for his patient-centered approach, ensuring that each patient receives personalized care and comprehensive treatment plans. He is dedicated to promoting preventive healthcare and educating patients on maintaining a healthy lifestyle.",
    fees: 800,
    address: {
      line1: "Green Road, Dhanmondi",
      line2: "Dhaka, Bangladesh",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Nusrat Jahan",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, FCPS (Gynecology & Obstetrics)",
    experience: "8 Years",
    about:
      "Dr. Nusrat Jahan is a skilled gynecologist with extensive experience in women's reproductive health. She provides expert care in pregnancy management, hormonal treatments, and gynecological surgeries. Dr. Jahan is passionate about empowering women through education and preventive care, ensuring they receive the best possible treatment for conditions such as PCOS, endometriosis, and menstrual disorders. Her compassionate approach and attention to detail make her a trusted healthcare provider for women of all ages.",
    fees: 1200,
    address: {
      line1: "Uttara, Sector 7",
      line2: "Dhaka, Bangladesh",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Md. Kamrul Islam",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "6 Years",
    about:
      "Dr. Md. Kamrul Islam is a renowned dermatologist specializing in the treatment of skin, hair, and nail conditions. With expertise in both medical and cosmetic dermatology, he offers advanced treatments for acne, eczema, psoriasis, and skin infections. Dr. Islam is also skilled in performing cosmetic procedures such as laser therapy, chemical peels, and anti-aging treatments. His patient-focused approach ensures that each individual receives tailored care to achieve healthy and radiant skin.",
    fees: 1000,
    address: {
      line1: "Mirpur-1",
      line2: "Dhaka, Bangladesh",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Abdul Rahman",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS, FCPS (Pediatrics)",
    experience: "9 Years",
    about:
      "Dr. Abdul Rahman is a dedicated pediatrician with nearly a decade of experience in child healthcare. He specializes in providing comprehensive care for infants, children, and adolescents, including immunizations, nutrition counseling, and developmental assessments. Dr. Rahman is committed to creating a friendly and supportive environment for young patients and their families, ensuring they receive the best possible care for conditions such as asthma, allergies, and infectious diseases.",
    fees: 900,
    address: {
      line1: "Chattogram Medical Road",
      line2: "Chattogram, Bangladesh",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Fatema Akter",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, MD (Neurology)",
    experience: "11 Years",
    about:
      "Dr. Fatema Akter is a highly respected neurologist with over a decade of experience in diagnosing and treating disorders of the brain and nervous system. She specializes in managing conditions such as epilepsy, migraines, strokes, and Parkinson’s disease. Dr. Akter is known for her thorough diagnostic approach and innovative treatment plans, ensuring that patients receive the most effective care for their neurological conditions. Her compassionate demeanor and expertise make her a trusted name in neurology.",
    fees: 1500,
    address: {
      line1: "Banani, Road 12",
      line2: "Dhaka, Bangladesh",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Tasnim Alam",
    image: doc6,
    speciality: "Gastroenterologist",
    degree: "MBBS, MD (Gastroenterology)",
    experience: "8 Years",
    about:
      "Dr. Tasnim Alam is a leading gastroenterologist with expertise in diagnosing and treating digestive system disorders. She provides advanced care for conditions such as acid reflux, ulcers, irritable bowel syndrome (IBS), and liver diseases. Dr. Alam is skilled in performing endoscopic procedures and offers personalized treatment plans to improve patients' digestive health. Her commitment to patient education and preventive care ensures that individuals achieve long-term wellness and a better quality of life.",
    fees: 1100,
    address: {
      line1: "Sylhet Central Road",
      line2: "Sylhet, Bangladesh",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Aby Sayed",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS, FCPS (Medicine)",
    experience: "12 Years",
    about:
      "Dr. Aby Sayed is a seasoned general physician with over 12 years of experience in providing comprehensive healthcare services. He specializes in managing chronic conditions such as diabetes, hypertension, and cardiovascular diseases, as well as treating acute illnesses and infections. Dr. Sayed is known for his empathetic approach and dedication to patient care, ensuring that each individual receives tailored treatment and preventive health advice. His goal is to help patients achieve optimal health and well-being.",
    fees: 1800,
    address: {
      line1: "Agrabad Commercial Area",
      line2: "Chattogram, Bangladesh",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Shakib Hossain",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS, FCPS (Gynecology & Obstetrics)",
    experience: "7 Years",
    about:
      "Dr. Shakib Hossain is a skilled gynecologist with extensive experience in women's health and reproductive care. He specializes in pregnancy management, gynecological surgeries, and hormonal treatments. Dr. Hossain is committed to providing compassionate and comprehensive care to his patients, addressing conditions such as infertility, menstrual disorders, and menopause. His patient-centered approach and dedication to excellence make him a trusted healthcare provider for women in Bangladesh.",
    fees: 1300,
    address: {
      line1: "Rajshahi Medical College Road",
      line2: "Rajshahi, Bangladesh",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Irana Chowdhury",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "10 Years",
    about:
      "Dr. Irana Chowdhury is a highly experienced dermatologist specializing in medical and cosmetic skin care. She provides advanced treatments for acne, eczema, psoriasis, and skin infections, as well as cosmetic procedures such as laser therapy and chemical peels. Dr. Chowdhury is dedicated to helping her patients achieve healthy and radiant skin through personalized treatment plans and preventive care. Her expertise and compassionate approach make her a trusted name in dermatology.",
    fees: 1400,
    address: {
      line1: "Gulshan Avenue",
      line2: "Dhaka, Bangladesh",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Shahid",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS, FCPS (Pediatrics)",
    experience: "6 Years",
    about:
      "Dr. Shahid is a dedicated pediatrician with a passion for child healthcare. He specializes in providing routine checkups, immunizations, and treatment for common childhood illnesses. Dr. Shahid is committed to creating a supportive and friendly environment for his young patients and their families, ensuring they receive the best possible care. His focus on preventive healthcare and patient education helps children grow up healthy and strong.",
    fees: 900,
    address: {
      line1: "Rangpur Medical College Area",
      line2: "Rangpur, Bangladesh",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Nahida Ahmed",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS, MD (Neurology)",
    experience: "9 Years",
    about:
      "Dr. Nahida Ahmed is a highly skilled neurologist with expertise in diagnosing and treating disorders of the nervous system. She specializes in managing conditions such as epilepsy, migraines, strokes, and Parkinson’s disease. Dr. Ahmed is known for her thorough diagnostic approach and innovative treatment plans, ensuring that patients receive the most effective care for their neurological conditions. Her compassionate demeanor and dedication to excellence make her a trusted name in neurology.",
    fees: 1200,
    address: {
      line1: "Motijheel Commercial Area",
      line2: "Dhaka, Bangladesh",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Zahidul Islam",
    image: doc12,
    speciality: "Gastroenterologist",
    degree: "MBBS, MD (Gastroenterology)",
    experience: "7 Years",
    about:
      "Dr. Zahidul Islam is a leading gastroenterologist with expertise in diagnosing and treating digestive system disorders. He provides advanced care for conditions such as acid reflux, ulcers, irritable bowel syndrome (IBS), and liver diseases. Dr. Islam is skilled in performing endoscopic procedures and offers personalized treatment plans to improve patients' digestive health. His commitment to patient education and preventive care ensures that individuals achieve long-term wellness and a better quality of life.",
    fees: 1000,
    address: {
      line1: "Mymensingh Medical College Road",
      line2: "Mymensingh, Bangladesh",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Sabrina Anwar",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS, FCPS (Medicine)",
    experience: "10 Years",
    about:
      "Dr. Sabrina Anwar is a highly experienced general physician with a decade of practice in primary healthcare. She specializes in diagnosing and treating common illnesses, infections, and chronic conditions such as diabetes, hypertension, and respiratory disorders. Dr. Anwar is known for her patient-centered approach, ensuring that each patient receives personalized care and comprehensive treatment plans. She is dedicated to promoting preventive healthcare and educating patients on maintaining a healthy lifestyle.",
    fees: 1500,
    address: {
      line1: "Barisal Sadar Hospital Area",
      line2: "Barisal, Bangladesh",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Rafiq Ahmed",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS, FCPS (Gynecology & Obstetrics)",
    experience: "8 Years",
    about:
      "Dr. Rafiq Ahmed is a skilled gynecologist with extensive experience in women's reproductive health. He provides expert care in pregnancy management, hormonal treatments, and gynecological surgeries. Dr. Ahmed is passionate about empowering women through education and preventive care, ensuring they receive the best possible treatment for conditions such as PCOS, endometriosis, and menstrual disorders. His compassionate approach and attention to detail make him a trusted healthcare provider for women of all ages.",
    fees: 1400,
    address: {
      line1: "Khulna Medical College Road",
      line2: "Khulna, Bangladesh",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Laila Nasrin",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "12 Years",
    about:
      "Dr. Laila Nasrin is a highly experienced dermatologist specializing in medical and cosmetic skin care. She provides advanced treatments for acne, eczema, psoriasis, and skin infections, as well as cosmetic procedures such as laser therapy and chemical peels. Dr. Nasrin is dedicated to helping her patients achieve healthy and radiant skin through personalized treatment plans and preventive care. Her expertise and compassionate approach make her a trusted name in dermatology.",
    fees: 2000,
    address: {
      line1: "National Cancer Institute, Mohakhali",
      line2: "Dhaka, Bangladesh",
    },
  },
];
