import { BiSolidErrorCircle } from "react-icons/bi";

type Props = {
  error: string;
};

export default function FormError({ error }: Props) {
  return (
    <p className="font-extralight text-red-500 text-lg flex items-center mt-2">
      <BiSolidErrorCircle className="mb-0.5 mr-1" />

      {error}
    </p>
  );
}
