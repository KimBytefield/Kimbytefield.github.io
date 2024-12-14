---
layout: post
title: Github blog 만들기
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

GitHub를 사용하여 블로그를 만드는 방법은 다음과 같습니다. GitHub Pages 기능을 이용하면 정적 웹사이트를 쉽게 호스팅할 수 있습니다.

#### 1. GitHub 계정 만들기 
   *  GitHub에 가입하고 로그인합니다. (http://github.com)

#### 2. 새 리포지토리 생성
   * "New" 버튼을 클릭하여 새 리포지토리를 만듭니다.
   * 리포지토리 이름을 username.github.io 형식으로 설정합니다. (여기서 username은 여러분의 GitHub 사용자 이름)

#### 3. Jekyll 블로그 설정
   * GitHub Pages는 Jekyll을 지원합니다. Jekyll을 사용하여 블로그를 만들려면 다음을 수행합니다:

     * 로컬 환경에서 Jekyll 설치 (옵션): Ruby와 Bundler를 설치한 후, 커맨드라인에서 아래 명령어를 실행합니다.
       ```
       gem install jekyll bundler
       ```

     * Jekyll 블로그 생성:
       ```
       jekyll new myblog
       cd myblog
       bundle exec jekyll serve
       ```
   * 이렇게 하면 myblog라는 폴더에 기본 Jekyll 블로그가 생성됩니다. 로컬 서버에서 블로그를 미리 볼 수 있습니다.

#### 4. 블로그 파일 커스터마이즈 및 푸시
   * 블로그의 코드를 수정하여 디자인, 글, 설정을 맞춤화합니다.
   * 수정을 완료한 후, 변경된 내용을 GitHub 리포지토리에 커밋하고 푸시합니다.
   ```
   git add .
   git commit -m "Initial blog setup"
   git push origin main
   ```
#### 5. 블로그 접근
   * 브라우저에서 `https://username.github.io`를 입력하면 블로그에 접속할 수 있습니다.
#### 6. 추가 기능
   * 테마를 변경하거나 추가 플러그인을 설치하여 블로그를 더욱 풍성하게 꾸밀 수 있습니다. GitHub에서 사용할 수 있는 다양한 Jekyll 테마를 찾아볼 수 있습니다.