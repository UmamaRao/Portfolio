import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  otherClasses,
  handleClick,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  otherClasses?: string;
  handleClick?: () => void;
}) => {
    const imge = ""
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] md:mt-10 md:w-60" onClick={handleClick}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center gap-2 justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
       {position === 'left' && icon}
        {title}
       {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
