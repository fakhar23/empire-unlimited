import { useState, ChangeEvent } from "react";
import InputUnderLine from "../../assets/imges/InputUnderLine.svg";
import Button from "../Buttons/Button";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
// import "./Footer.scss";

interface Props {}

function Footer(props: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-between  bg-background-black text-white gap-20 footer-component px-12 pb-9">
      <div className="flex basis-[409px] flex-grow shrink flex-col">
        <p className=" font-bold text-[41px] leading-[35px] mb-[11px]">Get in Touch</p>
        <p className="font-medium leading-[25px] text-lg mb-[19px]">Be Part Of Something Greater</p>
        <CustomInput
          type="text"
          placeholder="Name:"
          name="name"
          value={name}
          onChange={changeHandler}
        />

        <CustomInput
          type="email"
          placeholder="Email:"
          name="email"
          value={email}
          onChange={changeHandler}
        />

        <CustomInput
          type="text"
          placeholder="Message:"
          name="message"
          value={message}
          onChange={changeHandler}
        />
        <Button className="w-fit m-auto">Send</Button>
      </div>
      <div className="grow">
        <p className=" font-bold text-[32px]  mb-[34px]">Join Us</p>
        <Link to="#" className="mb-5 flex gap-2 items-center">
          <BsInstagram color="#ababab" />
          <p>Instagram</p>
        </Link>
        <Link to="#" className="mb-5 flex gap-2 items-center">
          <BsTwitter color="#ababab" />
          <p>Twitter</p>
        </Link>
        <Link to="#" className="mb-5 flex gap-2 items-center">
          <BsFacebook color="#ababab" />
          <p>Facebook</p>
        </Link>
      </div>
      <div className="grow">
        <p className=" font-bold text-[32px]  mb-[34px]">Contact Us</p>

        <Link to="mailto:investors@gymthriller.com" className="flex gap-2 items-center mb-5">
          <BsGlobe />
          <p className="">investors@gymthriller.com</p>
        </Link>
        <Link to="mailto:support@gymthriller.com" className="flex gap-2 items-center mb-5">
          <BsGlobe />
          <p className="">support@gymthriller.com</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;

interface CustomInputProps {
  type: "text" | "email" | "password" | string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ type, placeholder, name, value, onChange }: CustomInputProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-transparent mb-[4px] transition duration-500 ease-in-out
        focus:mb-[4px]
        focus:brightness-200
        focus-visible:outline-0"
      />
      <img src={InputUnderLine} className="mb-[20px]" />
    </>
  );
};
