# BGF리테일 사이트 리뉴얼      
      
## *💛작업툴*
- 와이어 프레이밍 및 디자인 : Photoshop, Illustrator, Adobe premire pro
- Bracket, Visual Studio code, jQuery

## *💛 How to Design*
- BGF리테일의 메인 색상인 '그린'을 기준으로 하여 내용을 강조할 수 있는 남색, 밝은 베이지색등을 함께 사용하여     
  전체적으로 브랜드가 가지고 있는 이미지와 아이덴티티를 강조하고자 함
- 사용자가 한 눈에 기업의 사회공헌 내용을 인지할 수 있도록, 아이콘과 짧은 글귀를 사용하여 페이지 디자인
- 페이지 내에서 사용된 모든 아이콘은 일러스트레이터로 직접 제작
- 전체적으로 사용자가 간결하게 기업이 어떤 일을 하고 있는지에 대해 인지할 수 있도록 심플한 디자인을 하고자 함   

  
## *💛 Code*
- PC~Mobile 반응형 지원 (pc는 1920＊1080에서 최적화)
- 영상은 Adobe premiere pro를 사용하여 사이즈 편집, video로 마크업
- header는 스크롤 다운 시 사라지고, 스크롤 업 시 나타나서 사용자가 좀 더 편하게 사이트를 사용할 수 있도록 jQuery로 구현
- 버튼은 jQuery를 사용하여 hover시 자연스럽게 animate되도록 구현
- 스크롤 시 배경 색상 자연스럽게 변경되도록 window scroll이벤트와 offset top값 사용
- CSS와 jQuery사용하여 특정 섹션에서 마우스 모양 변경되도록 구현.
  - event객체의 clientX,Y값 사용하여 이벤트 발생 위치 파악
- CSS background attachment속성 사용하여, 사용자가 스크롤 했을 때 이미지가 고정되어 스크롤 되도록 함.
- 모바일의 이미지 슬라이드는 'Swiper' 라이브러리 활용
  - 참고 링크 : [Swiper](https://swiperjs.com/)
- 이미지와 텍스트의 자연스러운 움직임은 'AOS' 라이브러리 활용
  - 참고 링크 : [AOS](https://michalsnik.github.io/aos/)


## 💛 PC ver. 디자인
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/111439754-07505680-8749-11eb-89e0-0645b4eb190b.jpg" width="50%" height="50%"/></p>          
        
        
## 💛 Mobile ver. 디자인
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/111439764-0a4b4700-8749-11eb-9009-c7045f011217.jpg" width="50%" height="50%"/></p>
