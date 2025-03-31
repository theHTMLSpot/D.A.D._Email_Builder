import { LucideIcon } from "lucide-react";

export default function DescriptionBlock({ Icon, text }: { Icon: LucideIcon; text: string }) {
  return (
    <div className="grid place-items-center text-center bg-white shadow-lg p-6 rounded-xl max-w-xs border border-gray-200 aspect-square">
      {/* Icon */}
      <Icon className="w-16 h-16 text-black" />

      {/* Text */}
      <p className="text-gray-800 text-lg font-medium mt-4">{text}</p>
    </div>
  );
}
