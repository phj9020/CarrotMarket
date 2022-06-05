import Link from "next/link";
import { useRouter } from "next/router";
import cls from "../../libs/utility";
import { useEffect, useState } from 'react';

// 할 일 : REACT COMPONENT로 쪼개기, 
// Button 컴포넌트 (o)
// 홈의 상품 컴포넌트,
// 동네생활의 질문 컴포넌트, 태그 컴포넌트  
// chat 컴포넌트, 
// 라이브 컴포넌트, 
// 답글 컴포넌트 apply to community/1 
// 프로필 컴포넌트(apply to community/1 과 페이지의 프로필), 
// 프로필(판매내역, 구매내역, 관심 목록) 컴포넌트

interface LayoutPpops {
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    children: React.ReactNode;
}

export default function Layout({ title, canGoBack, hasTabBar, children }: LayoutPpops) {
    const [path, setPath] = useState<string>();
    const router = useRouter();
    const arrowOnClick = () => {
        router.back();
    };
    useEffect(()=>{
        setPath(router.pathname)
    },[router])

    return (
        <div>
            <div className={cls(!canGoBack ? "justify-center" : "", "fixed top-0 flex items-center w-full max-w-xl py-2 text-lg text-orange-500 bg-white border-b font-medium px-2")}>
                {canGoBack ? <button className="font-bold" onClick={arrowOnClick}><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg></button> : null}
                {title ? <span className="font-semibold">{title}</span> : null}
            </div>
            <div className={cls("pt-16", hasTabBar ? "pb-16" : "")}>
                {children}
            </div>
            {hasTabBar ?
                <nav className="fixed bottom-0 flex items-center justify-around w-full max-w-xl py-3 text-gray-800 bg-white border-t">
                    <Link href="/">
                        <a className={cls(path == "/" ? "text-orange-500" : "null", "flex flex-col items-center justify-center")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span>홈</span>
                        </a>
                    </Link>
                    <Link href="/community">
                        <a className={cls(path == "/community" ? "text-orange-500" : "null", "flex flex-col items-center justify-center")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            <span>동네생활</span>
                        </a>
                    </Link>
                    <Link href="/chats">
                        <a className={cls(path == "/chats" ? "text-orange-500" : "null", "flex flex-col items-center justify-center")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <span>채팅</span>
                        </a>
                    </Link>
                    <Link href="/live">
                        <a className={cls(path == "/live" ? "text-orange-500" : "null", "flex flex-col items-center justify-center")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span>라이브</span>
                        </a>
                    </Link>
                    <Link href="/profile">
                        <a className={cls(path == "/profile" ? "text-orange-500" : "null", "flex flex-col items-center justify-center")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>프로필</span>
                        </a>
                    </Link>
                </nav>
                : null}
        </div>
    )
}