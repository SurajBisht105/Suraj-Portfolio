import Link from "next/link";
import Strings from "@/constants/strings";

const ResumeButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[10rem]"
      href={Strings.telegramLink}
      target="_blank"
    >
      Resume
    </Link>
  );
};

export default ResumeButton;
