import CommonButton from "@/components/common/CommonButton";
import tw from "tailwind-styled-components";
import { HiCheckCircle, HiOutlineTrash } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IBackground } from "@/models";
import { useEffect, useState } from "react";
import { changeBackground, getBackgroundList } from "@/api/user";
import { useRecoilState, useRecoilValue } from "recoil";
import { userDataAtom } from "@/store/user";
import { deleteBackground } from "@/api/background";
import { characterDataAtom } from "@/store/character";

export default function Background() {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const characterData = useRecoilValue(characterDataAtom);
  const [selected, setSelected] = useState<IBackground>({
    id: 1,
    imageUrl: "https://gitmagotchi-generated.s3.amazonaws.com/sampleBg2.jpg",
  });
  const [backgroundList, setBackgroundList] = useState<IBackground[]>([
    {
      id: 1,
      imageUrl: "https://gitmagotchi-generated.s3.amazonaws.com/sampleBg2.jpg",
    },
  ]);

  const { data } = useQuery({
    queryKey: ["background"],
    queryFn: () => getBackgroundList({ userId: 1 }),
  });

  const mutation = useMutation({
    mutationFn: changeBackground,
    onSuccess: (data) => {
      console.log(data);
      setUserData((prev) => {
        if (prev === null) return null;
        return {
          ...prev,
          backgroundUrl: selected?.imageUrl || prev.backgroundUrl,
        };
      });
      navigate("/");
    },
    onError: (err) => console.log(err),
  });
  const deleteMutation = useMutation({
    mutationFn: deleteBackground,
    onSuccess: (data) => {
      console.log(data);
      if (userData?.backgroundUrl === selected.imageUrl) {
        setUserData((prev) => {
          if (!prev) return prev;
          setSelected({
            id: 1,
            imageUrl:
              "https://gitmagotchi-generated.s3.amazonaws.com/sampleBg2.jpg",
          });
          return {
            ...prev,
            backgroundUrl:
              "https://gitmagotchi-generated.s3.amazonaws.com/sampleBg2.jpg",
          };
        });
      }
      setBackgroundList((prev) => prev.filter((bg) => bg.id !== selected.id));
      navigate("/");
    },
    onError: (err) => console.log(err),
  });

  useEffect(() => {
    if (data) {
      setBackgroundList([
        {
          id: 1,
          imageUrl:
            "https://gitmagotchi-generated.s3.amazonaws.com/sampleBg2.jpg",
        },
        ...data.backgrounds,
      ]);
    }
  }, [data]);

  useEffect(() => {
    backgroundList.map((bg) => {
      if (bg.imageUrl === userData?.backgroundUrl) {
        setSelected(bg);
      }
    });
  }, [backgroundList, userData?.backgroundUrl]);

  const handleChangeBg = () => {
    mutation.mutate({
      body: JSON.stringify({
        userId: userData?.id,
        backgroundId: selected?.id,
      }),
    });
  };

  const handleDeleteBg = (id: number) => {
    return () => {
      deleteMutation.mutate({
        backgroundId: id,
      });
    };
  };

  return (
    <Wrapper>
      <Header>
        <Title>현재 배경화면</Title>
        <Link to={"/background/create"}>
          <NewBgLink>+ 새 배경화면</NewBgLink>
        </Link>
      </Header>
      <Content>
        <CurrentBgContainer>
          <CurrentBg
            style={{
              backgroundImage: `url(${selected?.imageUrl})`,
            }}
          >
            <img
              src={characterData?.characterUrl || characterData?.faceUrl}
              className="w-40 lg:w-60"
            />
          </CurrentBg>
        </CurrentBgContainer>
        <BgList>
          {backgroundList.map((bg: IBackground) => (
            <BgItem
              key={bg.id}
              style={{
                backgroundImage: `url(${bg.imageUrl})`,
              }}
              onClick={() => setSelected(bg)}
            >
              {bg.id !== 1 && <TrashIcon onClick={handleDeleteBg(bg.id)} />}
              {selected && selected.id === bg.id && (
                <SelectedContainer>
                  <CheckIcon />
                  <CheckText>선택됨</CheckText>
                </SelectedContainer>
              )}
            </BgItem>
          ))}
        </BgList>
      </Content>
      <CommonButton title="변경" onClick={handleChangeBg} />
    </Wrapper>
  );
}

const Wrapper = tw.div`
w-full
h-full
flex
flex-col
space-y-6
items-center
pb-4
lg:px-14
lg:py-6

`;

const Header = tw.div`
w-full
flex
justify-between
items-end
px-8
lg:px-40
`;

const Title = tw.h1`
text-xl
lg:text-3xl
`;

const NewBgLink = tw.h4`
text-sm
lg:text-lg
text-slate-400
`;

const Content = tw.div`
w-full
h-20
flex-grow
flex
flex-col
lg:flex-row
space-y-4
lg:space-y-0
lg:justify-center
`;

const CurrentBgContainer = tw.div`
px-8
w-full
flex
justify-center
`;

const CurrentBg = tw.div`
w-80
h-80
lg:w-[27rem]
lg:h-[27rem]
flex
justify-center
items-center
rounded-xl
bg-cover
bg-no-repeat
bg-center
shadow-lg
border-2
border-slate-800
`;

const BgList = tw.div`
h-40
px-4
lg:py-4
lg:w-full
flex
lg:grid
lg:grid-cols-4
lg:overflow-y-scroll
lg:gap-2
lg:h-[27rem]
lg:items-start
items-center
space-x-2
lg:space-x-0
bg-slate-300
overflow-x-scroll
scrollbar-hide
lg:scrollbar-default
lg:overflow-x-auto
lg:rounded-lg
shadow-lg
border-2
border-slate-800
`;

const BgItem = tw.div`
h-36
lg:h-auto
aspect-square
rounded-xl
shadow-lg
bg-cover
bg-no-repeat
bg-center
cursor-pointer
hover:scale-105
group
relative
border-2
border-slate-800
`;

const SelectedContainer = tw.div`
w-full
h-full
rounded-xl
bg-slate-900/50
flex
flex-col
justify-center
items-center
`;

const CheckIcon = tw(HiCheckCircle)`
w-10
h-10
text-slate-100/70
`;

const CheckText = tw.h2`
text-lg
font-bold
text-slate-100/70
`;

const TrashIcon = tw(HiOutlineTrash)`
hidden
group-hover:block
w-6
h-6
absolute
top-2
right-2
text-slate-400
hover:text-red-400
`;
