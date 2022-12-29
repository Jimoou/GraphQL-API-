# API (Application Programming Interface)

API는 리모콘의 버튼과 같은 것이다. 유저에게 보여지는 인터페이스와 같다.

## REST API

REST 아키텍처 스타일을 따르는 API다. URL로 데이터를 불러오는 형식의 API다.

## GraphQL

REST API가 가진 단점인, Overfetching과 Underfetching을 보완한 API다.

REST는 데이터를 불러올 때, 해당되지 않는 데이터라도 한꺼번에 불러오게 되는데,
이것이 Overfetching이다.
또, 원하는 데이터를 불러오기 위해서 2개 이상의 데이터를 불러와야 하는데, 이를 Underfetching이라고 한다.

이러한 REST의 단점을 보완한 API가 GraphQL이다.
