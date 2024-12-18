// 책 데이터 (JSON)
const books = [
    {
        "title" : "방과후",
        "year" : 1985,
        "translator" : "구혜영",
        "image" : "img/afterschool.jpg"
    },
    {
        "title" : "졸업, 설월화 살인 게임",
        "year" : 1986,
        "translator" : "양윤옥",
        "image" : "img/graduate.jpg"
    },
    {
        "title" : "백마산장 살인사건",
        "year" : 1986,
        "translator" : "민경욱",
        "image" : "img/backmurdercase.jpg"
    },
    {
        "title" : "학생가의 살인",
        "year" : 1987,
        "translator" : "김난주",
        "image" : "img/studentmurdercase.jpg"
    },
    {
        "title" : "11문자 살인사건",
        "year" : 1987,
        "translator" : "민경욱",
        "image" : "img/elevenmurder.jpeg"
    },
    {
        "title" : "마구",
        "year" : 1988,
        "translator" : "이혁재",
        "image" : "img/magu.jpg"
    },
    {
        "title" : "그녀는 다 계획이 있다",
        "year" : 1988,
        "translator" : "양윤옥",
        "image" : "img/shehasalltheplan.jpeg"
    },
    {
        "title" : "오사카 소년탐정단",
        "year" : 1988,
        "translator" : "김난주",
        "image" : "img/osaka.jpg"
    },
    {
        "title" : "십자 저택의 피에로",
        "year" : 1989,
        "translator" : "김난주",
        "image" : "img/piearo.jpeg"
    },
    {
        "title" : "조인계획",
        "year" : 1989,
        "translator" : "양윤옥",
        "image" : "img/joinplan.jpg"
    },
    {
        "title" : "잠자는 숲",
        "year" : 1989,
        "translator" : "양윤옥",
        "image" : "img/sleepingforest.jpg"
    },
    {
        "title" : "살인현장은 구름 위",
        "year" : 1989,
        "translator" : "김난주",
        "image" : "img/abovecloud.jpeg"
    },
    {
        "title" : "브루투스의 심장",
        "year" : 1989,
        "translator" : "민경옥",
        "image" : "img/heart.jpg"
    },
    {
        "title" : "탐정클럽",
        "year" : 1990,
        "translator" : "양억관",
        "image" : "img/detectiveclub.jpg"
    },
    {
        "title" : "숙명",
        "year" : 1990,
        "translator" : "구혜영",
        "image" : "img/faith.jpg"
    },
    {
        "title" : "범인 없는 살인의 밤",
        "year" : 1990,
        "translator" : "윤성원",
        "image" : "img/nomurdernight.jpeg"
    },
    {
        "title" : "가면산장 살인사건",
        "year" : 1990,
        "translator" : "김난주",
        "image" : "img/mask.jpeg"
    },
    {
        "title" : "변신",
        "year" : 1991,
        "translator" : "이선희",
        "image" : "img/change.jpeg"
    },
    {
        "title" : "화랑정 살인사건",
        "year" : 1991,
        "translator" : "임경화",
        "image" : "img/hwarangmurder.jpeg"
    },
    {
        "title" : "교통경찰의 밤",
        "year" : 1992,
        "translator" : "이선희",
        "image" : "img/trafficpolicenight.jpeg"
    },
    {
        "title" : "눈에 갇힌 외딴 산장에서",
        "year" : 1992,
        "translator" : "김난주",
        "image" : "img/snowtrap.jpeg"
    },
    {
        "title" : "아름다운 흉기",
        "year" : 1992,
        "translator" : "민경욱",
        "image" : "img/beautifulknife.jpeg"
    },
    {
        "title" : "동급생",
        "year" : 1993,
        "translator" : "신경립",
        "image" : "img/classmate.jpg"
    },
    {
        "title" : "레몬",
        "year" : 1993,
        "translator" : "권일영",
        "image" : "img/lemon.jpg"
    },
    {
        "title" : "시노부 선생님, 안녕!",
        "year" : 1993,
        "translator" : "김난주",
        "image" : "img/shinobuhi.webp"
    },
    {
        "title" : "수상한 사람들",
        "year" : 1994,
        "translator" : "윤성원",
        "image" : "img/strangepeople.jpeg"
    },
    {
        "title" : "옛날에 내가 죽은 집",
        "year" : 1994,
        "translator" : "이영미",
        "image" : "img/houseidied.jpg"
    },
    {
        "title" : "무지개를 연주하는 소년",
        "year" : 1994,
        "translator" : "김난주",
        "image" : "img/boyplayingrainbow.jpg"
    },
    {
        "title" : "페럴렐 월드 러브 스토리",
        "year" : 1995,
        "translator" : "김난주",
        "image" : "img/lovestory.jpeg"
    },
    {
        "title" : "괴소소설",
        "year" : 1995,
        "translator" : "이선희",
        "image" : "img/monster1.jpg"
    },
    {
        "title" : "천공의 벌",
        "year" : 1995,
        "translator" : "김난주",
        "image" : "img/starinthesky.jpg"
    },
    {
        "title" : "명탐정의 규칙",
        "year" : 1996,
        "translator" : "이혁재",
        "image" : "img/ruleofdetective.jpg"
    },
    {
        "title" : "둘 중 누군가 그녀를 죽였다",
        "year" : 1996,
        "translator" : "양윤옥",
        "image" : "img/oneoftwokilledher.jpg"
    },
    {
        "title" : "독소소설",
        "year" : 1996,
        "translator" : "이선희",
        "image" : "img/monster2.jpg"
    },
    {
        "title" : "악의",
        "year" : 1996,
        "translator" : "양윤옥",
        "image" : "img/malice.jpg"
    },
    {
        "title" : "명탐정의 저주",
        "year" : 1996,
        "translator" : "이혁재",
        "image" : "img/detectivecurse.jpg"
    },
    {
        "title" : "탐정 갈릴레오",
        "year" : 1998,
        "translator" : "양억관",
        "image" : "img/gallilleo.jpg"
    },
    {
        "title" : "비밀",
        "year" : 1998,
        "translator" : "이선희",
        "image" : "img/secret.jpg"
    },
    {
        "title" : "내가 그를 죽였다",
        "year" : 1999,
        "translator" : "양윤옥",
        "image" : "img/ikilledhim.jpg"
    },
    {
        "title" : "백야행",
        "year" : 1999,
        "translator" : "정태원",
        "image" : "img/backyahang.jpg"
    },
    {
        "title" : "거짓말, 딱 한 개만 더",
        "year" : 2000,
        "translator" : "양윤옥",
        "image" : "img/onemorelie.jpeg"
    },
    {
        "title" : "예지몽",
        "year" : 2000,
        "translator" : "양억관",
        "image" : "img/dream.jpeg"
    },
    {
        "title" : "짝사랑",
        "year" : 2001,
        "translator" : "이선희",
        "image" : "img/oneroadlove.jpeg"
    },
    {
        "title" : "추리소설가의 살인사건",
        "year" : 2001,
        "translator" : "민경욱",
        "image" : "img/novelmurder.jpg"
    },
    {
        "title" : "호숫가 살인사건",
        "year" : 2002,
        "translator" : "권일영",
        "image" : "img/lakemurder.jpeg"
    },
    {
        "title" : "도키오",
        "year" : 2002,
        "translator" : "오근영",
        "image" : "img/dokio.jpg"
    },
    {
        "title" : "게임의 이름은 유괴",
        "year" : 2002,
        "translator" : "권일영",
        "image" : "img/nameofthegame.jpg"
    },
    {
        "title" : "편지",
        "year" : 2003,
        "translator" : "권일영",
        "image" : "img/letter.jpg"
    },
    {
        "title" : "비정근",
        "year" : 2003,
        "translator" : "김소영",
        "image" : "img/bjg.jpeg"
    },
    {
        "title" : "살인의 문",
        "year" : 2003,
        "translator" : "이혁재",
        "image" : "img/doorofmurder.jpg"
    },
    {
        "title" : "환야",
        "year" : 2004,
        "translator" : "권일영",
        "image" : "img/hwanya.jpg"
    },
    {
        "title" : "방황하는 칼날",
        "year" : 2004,
        "translator" : "이선희",
        "image" : "img/flyingknife.jpg"
    },
    {
        "title" : "흑소소설",
        "year" : 2005,
        "translator" : "이선희",
        "image" : "img/monster3.jpg"
    },
    {
        "title" : "용의자 X의 헌신",
        "year" : 2005,
        "translator" : "양억관",
        "image" : "img/x.jpg"
    },
    {
        "title" : "붉은 손가락",
        "year" : 2006,
        "translator" : "양윤옥",
        "image" : "img/redfinger.jpg"
    },
    {
        "title" : "사명과 영혼의 경계",
        "year" : 2006,
        "translator" : "오근영",
        "image" : "img/soul.jpeg"
    },
    {
        "title" : "새벽 거리에서",
        "year" : 2007,
        "translator" : "양억관",
        "image" : "img/street.jpg"
    },
    {
        "title" : "다잉 아이",
        "year" : 2007,
        "translator" : "김난주",
        "image" : "img/dyingeye.jpg"
    },
    {
        "title" : "유성의 인연",
        "year" : 2008,
        "translator" : "양윤옥",
        "image" : "img/starlover.jpg"
    },
    {
        "title" : "갈릴레오의 고뇌",
        "year" : 2008,
        "translator" : "양억관",
        "image" : "img/gonue.jpeg"
    },
    {
        "title" : "성녀의 구제",
        "year" : 2008,
        "translator" : "김난주",
        "image" : "img/guje.jpeg"
    },
    {
        "title" : "패러독스 13",
        "year" : 2009,
        "translator" : "이혁재",
        "image" : "img/thirteen.jpg"
    },
    {
        "title" : "신참자",
        "year" : 2009,
        "translator" : "김난주",
        "image" : "img/newcomer.jpg"
    },
    {
        "title" : "뻐꾸기 알은 누구의 것인가",
        "year" : 2010,
        "translator" : "김난주",
        "image" : "img/egg.jpg"
    },
    {
        "title" : "미등록자",
        "year" : 2010,
        "translator" : "이정환",
        "image" : "img/undefined.jpg"
    },
    {
        "title" : "백은의 잭",
        "year" : 2010,
        "translator" : "한성례",
        "image" : "img/jack.jpeg"
    },
    {
        "title" : "그 무렵 누군가",
        "year" : 2011,
        "translator" : "이혁재",
        "image" : "img/someone.jpg"
    },
    {
        "title" : "기린의 날개",
        "year" : 2011,
        "translator" : "김난주",
        "image" : "img/giraff.webp"
    },
    {
        "title" : "한여름의 방정식",
        "year" : 2011,
        "translator" : "이혁재",
        "image" : "img/summer.jpg"
    },
    {
        "title" : "매스커레이드 호텔",
        "year" : 2011,
        "translator" : "양윤옥",
        "image" : "img/hotel1.jpg"
    },
    {
        "title" : "왜소소설",
        "year" : 2012,
        "translator" : "이혁재",
        "image" : "img/monster4.jpeg"
    },
    {
        "title" : "나미야 잡화점의 기적",
        "year" : 2012,
        "translator" : "양윤옥",
        "image" : "img/namiya.jpeg"
    },
    {
        "title" : "몽환화",
        "year" : 2013,
        "translator" : "민경욱",
        "image" : "img/mong.jpg"
    },
    {
        "title" : "기도의 막이 내릴 때",
        "year" : 2013,
        "translator" : "김난주",
        "image" : "img/mack.jpeg"
    },
    {
        "title" : "화이트 러시",
        "year" : 2013,
        "translator" : "권남희",
        "image" : "img/whiterush.jpg"
    },
    {
        "title" : "공허한 십자가",
        "year" : 2014,
        "translator" : "이선희",
        "image" : "img/emptycross.jpg"
    },
    {
        "title" : "매스커레이드 이브",
        "year" : 2014,
        "translator" : "양윤옥",
        "image" : "img/hotel2.jpg"
    },
    {
        "title" : "허상의 어릿광대",
        "year" : 2015,
        "translator" : "김난주",
        "image" : "img/clown.jpg"
    },
    {
        "title" : "라플라스의 마녀",
        "year" : 2015,
        "translator" : "양윤옥",
        "image" : "img/witch.jpg"
    },
    {
        "title" : "금단의 마술",
        "year" : 2015,
        "translator" : "김난주",
        "image" : "img/magic.jpg"
    },
    {
        "title" : "인어가 잠든 집",
        "year" : 2015,
        "translator" : "김난주",
        "image" : "img/sleepinghouse.jpeg"
    },
    {
        "title" : "위험한 비너스",
        "year" : 2016,
        "translator" : "양윤옥",
        "image" : "img/dangerou.jpeg"
    },
    {
        "title" : "연애의 행방",
        "year" : 2016,
        "translator" : "양윤옥",
        "image" : "img/whereislove.jpg"
    },
    {
        "title" : "눈보라 체이스",
        "year" : 2016,
        "translator" : "양윤옥",
        "image" : "img/showchase.jpeg"
    },
    {
        "title" : "그대 눈동자에 건배",
        "year" : 2017,
        "translator" : "양윤옥",
        "image" : "img/cheers.jpeg"
    },
    {
        "title" : "매스커레이드 나이트",
        "year" : 2017,
        "translator" : "양윤옥",
        "image" : "img/hotel3.jpeg"
    },
    {
        "title" : "마력의 태동",
        "year" : 2018,
        "translator" : "양윤옥",
        "image" : "img/power.jpg"
    },
    {
        "title" : "희망의 끈",
        "year" : 2019,
        "translator" : "김난주",
        "image" : "img/hope.jpg"
    },
    {
        "title" : "녹나무의 파수꾼",
        "year" : 2020,
        "translator" : "양윤옥",
        "image" : "img/tree.jpg"
    },
    {
        "title" : "블랙 쇼맨과 이름 없는 마을의 살인",
        "year" : 2020,
        "translator" : "최고은",
        "image" : "img/noname.jpg"
    },
    {
        "title" : "백조와 박쥐",
        "year" : 2021,
        "translator" : "양윤옥",
        "image" : "img/swanandbat.jpg"
    },
    {
        "title" : "블랙 쇼맨과 환상의 여자",
        "year" : 2023,
        "translator" : "최고은",
        "image" : "img/wonderfulwoman.jpg"
    },
    {
        "title" : "매스커레이드 게임",
        "year" : 2023,
        "translator" : "양윤옥",
        "image" : "img/hotel4.jpg"
    },
    {
        "title" : "마녀와 보낸 7일간",
        "year" : 2023,
        "translator" : "양윤옥",
        "image" : "img/sevendays.jpg"
    },
    {
        "title" : "당신이 누군가를 죽였다",
        "year" : 2023,
        "translator" : "최고은",
        "image" : "img/youkilledsomeone.jpg"
    },
    {
        "title" : "블랙 쇼맨과 운명의 바퀴",
        "year" : 2024,
        "translator" : "최고은",
        "image" : "img/destinywheel.jpg"
    },
    {
        "title" : "녹나무의 여신",
        "year" : 2024,
        "translator" : "양윤옥",
        "image" : "img/treegodness.jpg"
    }
];

// 검색 입력 필드와 결과를 표시할 컨테이너 선택
const searchInput = document.getElementById('searchInput');
const bookImagesContainer = document.getElementById('bookImagesContainer');

// 검색 이벤트 리스너
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();

    // 검색 결과에 맞는 책을 찾기
    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(searchText) || 
               book.year.toString().includes(searchText) || 
               book.translator.toLowerCase().includes(searchText);
    });

    // 기존의 책 이미지들을 삭제
    bookImagesContainer.innerHTML = '';

    // 결과에 맞는 책 이미지들 표시
    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const imgElement = document.createElement('img');
            imgElement.src = book.image;
            imgElement.alt = book.title;
            imgElement.classList.add('book-image');
            bookImagesContainer.appendChild(imgElement);
        });
    } else {
        const noResultMessage = document.createElement('p');
        noResultMessage.textContent = '검색 결과가 없습니다.';
        bookImagesContainer.appendChild(noResultMessage);
    }
});
