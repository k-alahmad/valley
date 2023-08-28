import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { MdMail, MdPerson } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { data as brochureData } from "../../../data/brochureData";
import {
	hideModal,
	register,
	counterIsFull,
	selectDownloadState,
	selectRegisterState,
} from "../../../redux/modal.slice";
import { useTranslation } from "react-i18next";
import { systemSettings } from "../../../settings";
const CustomInput = ({
	icon,
	placeholder,
	type,
	name,
	id,
	value,
	onChange,
}) => {
	return (
		<div className='border-b-[1px] border-primary px-4 py-3 flex'>
			{icon}
			<input
				type={type}
				className='bg-transparent px-2 w-full outline-none'
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				id={id}
				value={value}
			/>
		</div>
	);
};

const RegisterForm = () => {
	const brochure = brochureData.find(
		(d) => d.template == systemSettings.brochure.template,
	);
	const { t, i18n } = useTranslation();
	const [email, setEmail] = useState("");
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const form = useRef();
	const downloadState = useSelector(selectDownloadState);
	const registerState = useSelector(selectRegisterState);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_5wdnu6j",
				"template_slqqcpm",
				form.current,
				"sxh5TJan60LQqD6Sw",
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		let formData = new FormData(form.current);
		try {
			const response = await fetch(
				"https://hooks.zapier.com/hooks/catch/12792925/35rmre0/",
				{
					method: "POST",
					body: formData,
					"Content-Type": "multipart/form-data",
				},
			);
			const result = response.json();
			console.log("Success:", result);
			sendEmail(e);
			if (downloadState) {
				let alink = document.createElement("a");
				alink.href = brochure.file;
				alink.download = "BrochurePdf.pdf";
				alink.click();
			}
			dispatch(register());
			dispatch(counterIsFull());
			dispatch(hideModal());
			navigate("/thankyou");
		} catch (error) {
			console.error("Error here:", error);
		}
	};

	return (
		<form
			ref={form}
			onSubmit={handleSubmit}
			className='flex flex-col justify-between items-stretch h-full space-y-8'
		>
			<CustomInput
				icon={<MdPerson className='text-primary text-big' />}
				placeholder={t("formFullName")}
				type='text'
				name='fullName'
				id='fullName'
				value={fullName}
				onChange={(event) => setFullName(event.target.value)}
			/>

			<CustomInput
				icon={<MdMail className='text-primary text-big' />}
				placeholder={t("formEmail")}
				type='email'
				name='email'
				id='email'
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>
			<input
				type='text'
				className='hidden'
				name={"project"}
				value='Danube Elitz3 Project'
				readOnly
			/>
			<PhoneInput
				country={"ae"}
				placeholder={t("formPhoneNumber")}
				enableSearch={true}
				inputProps={{
					name: "phone",
					id: "phone",
					required: true,
				}}
				onChange={setPhone}
				containerClass='!border-b-[1px] border-primary px-1 flex '
				inputClass={`!bg-transparent !w-full !text-lg !text-primary !h-full !border-none  ${
					i18n.language == "en" ? "px-0" : "mx-10"
				} !outline-none`}
				buttonClass={`!border-none !text-lg`}
				buttonStyle={{ direction: "ltr" }}
				inputStyle={{
					direction: "ltr",
				}}
			/>
			<button
				className={`${"bg-primary"} text-white text-small w-full py-4 disabled:bg-fourth/60`}
				disabled={
					email.replace(/ /g, "") == "" ||
					fullName.replace(/ /g, "") == "" ||
					phone.length < 12
				}
			>
				{t("register")}
			</button>
		</form>
	);
};

export default RegisterForm;
