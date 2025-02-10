interface CustomButtonProps {
    CustomOnClick?: () => void;
    title: string;
    styleClass?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ CustomOnClick, title, styleClass }) => {
    return (
        <button
            onClick={CustomOnClick}
            className={`${styleClass} relative px-6 py-[11px] text-white font-extrabold text-xl leading-6 rounded-lg bg-gradient-to-b from-deep-blue via-purple to-orange shadow-custom-xl hover:scale-105 transition-transform`}>
            {title}
        </button>
    );
};

export default CustomButton;


