"use client";

import axios from "axios";
import IconButton from "./IconButton";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [isConsentAccepted, setIsConsentAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    setMessage("");
    setIsSubmitting(true);
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("text", text);
    formData.append("consent", String(isConsentAccepted));

    try {
      await axios.post(
        // `${process.env.NEXT_PUBLIC_API_URL}/api/v1/message/welcome@kks23.ru`,
        // `/api/v1/message/welcome@kks23.ru`,
        `/api/v1/message/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("Заявка отправлена успешно");
      setName("");
      setPhone("");
      setEmail("");
      setText("");
      setFile(null);
      setIsConsentAccepted(false);
    } catch {
      setMessage("Произошла ошибка при отправке сообщения.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-20">
      <div className="flex gap-[35px] max-[610px]:gap-[15px] mb-[35px] mt-[150px]">
        <div className="w-[7px] bg-(--color-blue)" />
        <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
          Оставьте заявку!
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-[35px] items-end flex-wrap"
      >
        <div className="flex flex-col gap-[35px]">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите своё ФИО"
            required
          />
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Введите номер телефона"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите свой E-mail"
            required
          />
          <textarea
            name="text"
            value={text}
            placeholder="Введите текст заявки"
            onChange={(e) => setText(e.target.value)}
            className="resize-none border-3 p-[10px] border-(--color-text-dark) text-(--color-text-dark) text-[25px] h-[150px]"
          />
          <div className="flex items-center gap-[10px]">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              name="attachment"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer text-white transition flex items-center gap-[10px]"
            >
              <Image src="/images/clip.svg" alt="" width={40} height={40} />
              {file?.name || "Прикрепить опросный лист..."}
            </label>
          </div>
          <label className="flex items-start gap-[14px] max-w-[605px] text-(--color-text-dark) cursor-pointer">
            <input
              type="checkbox"
              checked={isConsentAccepted}
              onChange={(e) => setIsConsentAccepted(e.target.checked)}
              required
              className="mt-[4px] min-w-[20px] h-[20px] accent-(--color-blue)"
            />
            <span className="leading-[1.5]">
              Даю согласие на{" "}
              <a
                href="https://www.consultant.ru/document/cons_doc_LAW_61801/315f051396c88f1e4f827ba3f2ae313d999a1873/?ysclid=mmnjkywvtx729057527"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-blue) underline underline-offset-[3px]"
              >
                обработку персональных данных
              </a>
              .
            </span>
          </label>
          <span
            style={{
              color:
                message === "Заявка отправлена успешно" ? "#73c886" : "#ea8282",
            }}
          >
            {message}
          </span>
        </div>
        <IconButton
          label={isSubmitting ? "Отправка..." : "Отправить"}
          type="submit"
          disabled={isSubmitting}
        >
          <Image src="/images/send.svg" alt="" width={40} height={40} />
        </IconButton>
      </form>
    </div>
  );
};

export default Form;
