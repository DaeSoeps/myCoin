// 타입스크립트 기본 파일
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const TypeScriptPage: React.FC<GreetingsProps> = ({ name, mark }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

TypeScriptPage.defaultProps = {
  mark: '!'
};

export default TypeScriptPage;