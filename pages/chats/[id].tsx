import type { NextPage } from 'next';

const ChatRoom: NextPage = () => {
    return (
        <div className="px-4 py-16 space-y-4">
            {/* person1 */}
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
                    <p>얼마에 파시나요?</p>
                </div>
            </div>
            {/* person2 */}
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
                    <p>2000원 생각해요</p>
                </div>
            </div>
            {/* person1 */}
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
                    <p>거래 하시죠</p>
                </div>
            </div>
            {/* floating bottom chat input */}
            <div className="fixed left-0 right-0 w-full max-w-md mx-auto bottom-4">
                <div className="relative flex items-center">
                    <input type="text" className="w-full pr-12 border-gray-300 rounded-full shadow-sm focus:ring-orange-500 focus:outline-none focus:border-orange-500" />
                    <div className="absolute right-0 inset-y-0 flex py-1.5 pr-1.5">
                        <button className="flex items-center px-3 text-sm text-white bg-orange-500 rounded-full hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">⮞</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom;