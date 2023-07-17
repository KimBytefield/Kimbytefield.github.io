---
layout: post
title: Architecture) MSA 구조
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

### MSA 란?
Micro Service Architecture의 줄임말
독립적으로 배포 가능한 각각의 기능을 수행하는 서비스로 구성된 프레임워크.

독립 배포와 다른 기술 스택이 사용 가능하다.


![Monolithic 과 MSA 비교](/images/post/MSAstructure.png)


#### Monolithic Architecture

Monolithic Architecture : 소프트웨어의 모든 구성요소가 한 프로젝트에 통합되어 있는 형태.
소규모 프로젝트에서 사용됨.

- 부분 장애가 전체 서비스 장애로 확대될 수 있다.
- 부분적인 Scale-out(서버 확장)이 어렵다.
- 서비스의 변경이 어려우며 수정 시 장애의 영향도 파악도 어렵다.
- 배포시간이 길다.
- 한 Framework과 언어에 종속적이다.

#### Micro-Service Architecture
MSA는 API를 통해 상호작용할 수 있다.
즉, 서비스의 end-point를 API형태로 외부에 노출하고, 실질적인 세부 사항은 모두 추상화 한다.
내부의 구현 로직, 아키텍처와 프로그래밍 언어, 데이터베이스, 품질 유지 체께와 같은 기술적인 사항들은 서비스 API에 의해 철저하게 가려진다.

`*SOA(service Oriented Architecture)`의 특징을 다수 공통으로 가진다.
> SOA - 대규모 컴퓨터 시스템을 구축할 때의 개념으로, 엄부상 일 처리에 해당하는 소프트웨어 기능을 서비스로 판단하고 그 서비스를 네트워크상에 연동하여 시스템 전체를 구축해가는 방법론이다. 엄무 처리 변화를 시스템에 빠르게 반영하고자 하는 수요에 대응하기 위해 2004년부터 IT업계에서 주목하고 있다.

[SOP란?](/_posts/sop.md)

##### MSA 장점 
>각 서비스는 모듈화가 되어있어 모듈끼리 RPC 또는 message-driven API등을 이용하여 통신한다.
이러한 MSA는 각각 개별의 서비스 개발을 빠르게 하며, 유지보수도 쉽게 할 수 있도록 한다.
> ###### * RPC (Remote Procedure Call): 원격 호출 프로그래밍 방법


>팀 단위로 적절한 수준에서 기술 스택을 다르게 가져갈 수 있다.

>서비스별로 독립적 배포가 가능하다. 따라서 지속적인 배포 CD도 모놀로식에 비해 가볍게 할 수 있다.

>각각 서비스의 부하에 따라 개별적으로 scale-out이 가능하다. 메모리, CPU적으로 상당부분 이득이 된다.
> ###### * scale-out :  장비추가 확장 방식

##### MSA 단점
>모놀로식에 비해 상대적으로 많이 복잡하다. 서비스가 모두 분산되어 있기 때문에 개발자는 내부 시스템의 통신을 어떻게 가져가야 할지 정해야한다. 또한 통신의 장애와 서버의 부하 등이 있을 경우 어떻게 transaction을 유지할 지 결정하고 구현해야 한다.

>모놀리식에서는 단일 트랜잭션을 유지하면 됐지만 MSA에서는 비즈니스에 대한 DB를 가지고 있는 서비스도 각기 다르고, 서비스의 연결을 위해서는 통신이 포함되기 때문에 트랜잭션을 유지하는게 어렵다.

>통합 테스트가 어렵다. 개발환경과 운영환경을 동일하게 가져가기 쉽지 않다.

>운영환경에서 배포하는 것이 쉽지않다. 다른 서비스들과의 연계를 확인할 필요가 있다.
