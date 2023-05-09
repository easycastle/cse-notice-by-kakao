function sendLink() {
    try {
        Kakao.init('fc140a709fefec11ce767c5bd9c627af')
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '대충 제목',
                description: '대충 카테고리',
                imageUrl:
                    '컴학.jpg',
                link: {
                    webUrl: 'https://computer.knu.ac.kr/bbs/board.php?bo_table=sub5_1',
                    mobileWebUrl: 'https://computer.knu.ac.kr/bbs/board.php?bo_table=sub5_1',
                },
            },
            buttons: [
                {
                    title: '더보기',
                    link: {
                        webUrl: 'https://computer.knu.ac.kr/bbs/board.php?bo_table=sub5_1',
                        mobileWebUrl: 'https://computer.knu.ac.kr/bbs/board.php?bo_table=sub5_1',
                    },
                },
            ],
        })
        ; window.kakaoDemoCallback && window.kakaoDemoCallback()
    }
    catch (e) { window.kakaoDemoException && window.kakaoDemoException(e) }
}