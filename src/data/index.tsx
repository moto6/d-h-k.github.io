import { IconType } from "../components/UI/atom/Icon";
import worldSkills from "../images/world-skills.png";

export type ProfileType = {
  name: string;
  value: string;
}[];

export type CareerType = {
  name: string;
  href: string;
  period: string;
}[];

export type ProjectType = {
  name: string;
  data: ProjectOneType[];
}[];

export type ProjectOneType = {
  best?: boolean;
  name: string;
  period: string;
  people: number | number[];
  content: string;
  detail?: string[];
  skill: IconType[];
};

export type PostType = {
  title: string;
  date: string;
  content: string;
  thumbnail?: string;
};

interface IProps {
  profile: ProfileType;
  career: CareerType;
  project: ProjectType;
  posts: PostType[];
}

const data: IProps = {
  profile: [
    {
      name: "이름",
      value: "김동훈",
    },
    {
      name: "생년월일 : 이거 없어도 될듯..?",
      value: "생일적기",
    },
    {
      name: "연락처",
      value: "010-***",
    },
    // {
    //   name: "이메일",
    //   value: "junho234323@gmail.com",
    // },
    {
      name: "짧은소개",
      value: "백문이 불여일타",
    },
  ],
  career: [
    {
      name: "강한친구 대한육군",
      href: "https:대한육균",
      period: "1992.02~~~~ 언제까지?",
    },
    {
      name: "@개발",
      href:
        "https://hido",
      period: "20.10",
    },
    {
      name: "@서울 ",
      href:
        "https://momoland",
      period: "2021.02",
    },
  ],
  project: [
    {
      name: "@맛있는건정말참을수없어",
      data: [
        {
          name: "쿠우",
          period: "2021.09 ~ 현재",
          people: 2,
          content: `컨텐츠 짧은 설명`,
          detail: [
            "API 활용",
            "병렬처리 및 최적화",
            "화면 노출",
            "GitHub Action 을 통한 배포 자동화 (Docker, AWS ECR, ECS) + 슬랙 배포 알림 추가",
          ],
          skill: [
            "Sass",
            "Atomic Design",
            "C Sharp",
            "Amazon AWS",
            "Docker",
            "GitHub Actions",
            "Mysql",
            "JSON Web Tokens",
          ],
        },

        {
          best: true,
          name: "쿠팡",
          period: "20 ~ 21",
          people: 1,
          content: `최소공배수<br/>
                  전체적인 구조 / 개발 진행<br/><br/>
                  이전기준
                  `,
          detail: [
            "쇼핑몰과",
            "대량 트래픽 분산 대응",
            "뭐가있지...",
            "GitHub Action 을 통한 배포 자동화 (Docker, AWS ECR, ECS) + 슬랙 배포 알림 추가",
            "AWS Lambda 크론탭",
            "어드민 개발",
          ],
          skill: [
            "Next.js",
            "Node.js",
            "Express",
            "Socket.io",
            "Sass",
            "Amazon AWS",
            "Docker",
            "GitHub Actions",
            "Mysql",
            "JSON Web Tokens",
          ],
        },
        {
          name: "REST API 개발",
          period: "2020.12 ~ 2020.12",
          people: 1,
          content: `연동 서비스 제공<br/>
                    API 개발담당<br/>
                    Spring REST API && 헤이티오스 제공
                        `,
          detail: [
            "REST API ",
            "GitHub Action 을 통한 배포 자동화 (Docker, AWS ECR, ECS) + 슬랙 배포 알림 추가",
          ],
          skill: [

            "Mysql",
            "Amazon AWS",
            "Docker",
            "GitHub Actions",
          ],
        },
      ],
    },
    {
      name: "@test",
      data: [
        {
          name: "이거함",
          content: "test",
          people: 1,
          period: "2018.10 ~ 2019.12",
          skill: [],
        },
      ],
    },
  ],
  posts: [
    {
      title: "2018년",
      date: "2021.07.23",
      content: "fu제목제목",
      thumbnail: worldSkills,
    },
    {
      title: "테스트2",
      date: "2022.01.01",
      content: "test",
    },
    {
      title: "테스트1",
      date: "2034.01.01",
      content: "test",
    },
  ],
  // wine: [
  //   {
  //     name: {
  //       eng: " Rouge",
  //       ko: "ㅇㄹ",
  //     },
  //     url: "https://waalmot.com/#/wine/5458640",
  //     eatenDate: "2021-04-04",
  //   },

  //   {
  //     name: {
  //       eng: "Veraton Garnacha",
  //       ko: "베라톤 가르나차",
  //     },
  //     url: "https://waalmot.com/#/wine/98783",
  //     eatenDate: "2021-04-17",
  //   },
  //   {
  //     name: {
  //       eng: "애시드 테스트 리슬링",
  //       ko: "Acid Test Riesling",
  //     },
  //     url: "https://waalmot.com/#/wine/8471623",
  //     eatenDate: "2021-04-17",
  //   },
  // ],
};

// 게시물 최신순 정렬
data.posts = data.posts.sort((a, b) => {
  return +new Date(b.date) - +new Date(a.date);
});

export default data;
