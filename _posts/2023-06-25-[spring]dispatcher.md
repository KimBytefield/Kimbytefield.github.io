---
layout: post
title: Spring) Dispatcher-servlet 구조
date: 2016-05-01 12:00:00
categories: posts
comments: true
en: true
description: An example post to this theme
pt: /posts/example-post-pt-br/
description_pt: Um post de exemplo para esse tema
keywords: "Key, words, about, this, post, to, SEO"
authors:
- author1
- author2
---

### 1. Dispatcher-servlet 의 개념

---

[Dispatcher-servlet] 이란?
dispatch는 `보내다`의 뜻을 가지고 있다.
디스패처 서블릿은 HTTP 프로토콜로 들어오는 모든 요청을 먼저 받아 적합한 컨트롤러에 위임해 주슨 프론트 컨트롤러 라고 정의할 수 있다.
(사용자의 요청이 서버로 들어오기 전 공통의 작업을 처리하는 컨트롤러)

client -> tomcat apatch -> dispatcher-servlet -> server ->  controller API -> service -> repository -> storage

MVC 구조에서 함께 사용되는 디자인패턴이다.

[Dispatcher-Servlet]의 장점
과거 모든 서블릿은 URL매핑을 위해 web.xml에 모두 등록해주어야 했지만, dispatcher-servlet이 해당 어플리케이션으로 들어오는 모든 요청을 핸들링 해주고 공통작업을 처리하면서 편리하게 이용할수 있게 되었다.


[정적 자원(Static Resources)] 처리
모든 요청을 처리하다 보니 이미지나 HTML/CSS/Javascript등과 같은 정적 파일에 대한 요청도 가로채기에 정적 자원을 불러오지 못하는 상황이 발생된다.

이를 해결 하기 위해 2가지 방법을 사용한다.
1. 클라이언트 요청 분리 : 정적 자원 요청과 애플리케이션 요청 분리.
   * URL 분리
   1. /app - Dispatcher Servlet 컨트롤
   2. /resource - 정적 자원

>> 단점 : 코드가 지저분해지며 모든 요청에 URL을 붙여줘야한다.

2. 요청 우선순위 : 애플리케이션 요청을 탐색하고 없으면 정적 자원 요청으로 처리.
    * Dispatcher Servlet이 처리할 컨트롤러를 먼저 찾고, 처리할 컨트롤러가 없을 시 설정된 자원 경로를 탐색하게 한다.

>> 효율적인 리소스 관리를 지원, 추후 확장이 용이하다.

[Dispatcher-Servlet] 동작 과정

![description](/images/post/dispatcher-servlet.png "description")

1. 클라이언트의 요청을 받음.
2. 요청 정보를 통해 위임할 컨트롤러 찾음.
3. 요청을 컨트롤로로 위임할 핸들러를 찾아서 전달.
4. 핸들러가 컨트롤러로 요청을 위임함.
5. 비지니스 로직을 처리함. (service - Repository - storage)
6. 컨트롤러가 반환값을 반환함.
7. 핸들러가 반환값을 처리함.
8. 서버의 응답을 클라이언트로 반환함.
