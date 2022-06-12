import type { NextPage } from 'next';
import HeadInfo from '../components/head';
import Layout from '../components/layout';
import Message from './../components/message';

const ChatRoom: NextPage = () => {
    return (
        <Layout title="뒤로" canGoBack>
            <HeadInfo title="이웃 채팅 | 캐럿마켓" keywordContent="Next.js, tailwind, Phj9020" descriptionContent="캐럿마켓 이웃과 채팅" />
            <div className="px-4 pt-4 pb-16 space-y-4">
                <Message message="얼마에 파시나요?" />
                <Message message="2000원 생각해요" reversed />
                {/*chat input */}
                <div className="fixed left-0 right-0 w-full max-w-md mx-auto bottom-4">
                    <div className="relative flex items-center">
                        <input type="text" className="w-full pr-12 border-gray-300 rounded-full shadow-sm focus:ring-orange-500 focus:outline-none focus:border-orange-500" />
                        <div className="absolute right-0 inset-y-0 flex py-1.5 pr-1.5">
                            <button className="flex items-center px-3 text-sm text-white bg-orange-500 rounded-full hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">⮞</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default ChatRoom;