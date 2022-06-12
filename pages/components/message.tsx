import cls from "../../libs/utility";

interface MessageProps {
    message: string;
    reversed?: boolean;
    avatarUrl?: string;
}

export default function Message({ message, reversed, avatarUrl }: MessageProps) {
    return (
        <div className={cls(reversed ? "flex-row-reverse space-x-reverse" : "space-x-2" , "flex items-start space-x-2")}>
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
                <p>{message}</p>
            </div>
        </div>
    )
}