
interface TextAreaProps {
    label?: string;
    name?: string;
    [key: string]: any;
}

export default function Textarea({ label, name, ...rest }: TextAreaProps) {
    return (
        <div>
            {label ?
                <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
                : null
            }
            <textarea id={name} {...rest} className="w-full mt-1 border-gray-300 rounded-md shadow-sm resize-none focus:ring-orange-500 focus:border-orange-500 focus:outline-none" rows={4} />
        </div>

    )
}