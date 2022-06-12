import type { NextPage } from 'next';
import Layout from './components/layout';
import FloatingButton from './components/floating-button';
import HeadInfo from './components/head';
import Item from './components/item';


const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar >
      <HeadInfo title="홈 | 캐럿마켓" keywordContent="Next.js, tailwind, Phj9020" descriptionContent="캐럿마켓 클론사이트에 오신것을 환경합니다" />
      <div className="flex flex-col px-4 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item key={i} id={i} title="iphone10" price={99} comments={1} hearts={2} />
        ))}
        <FloatingButton href="/items/upload">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
}

export default Home;
