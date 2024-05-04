import { Check } from "lucide-react";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <Check />
      <p>{message}</p>
    </div>
  );
};
