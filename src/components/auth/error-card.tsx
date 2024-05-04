import { FaExclamationTriangle } from "react-icons/fa";
import { CardWrapper } from "./card-wrapper";

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oop! Something's went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Try again"
    >
      <div className="w-full flex justify-center m-auto">
        <FaExclamationTriangle />
      </div>
    </CardWrapper>
  );
}
