
// 먼저, src 문서 안에 "component " 문서를 하나 새로 만들어요
// 그리고 그 안에 ui 문서를 하나 만듭니다
// 그리고 그 안에 bittom.tsx 파일을 만들어서 해당 코드를 넣어줍니다.
// src/components/ui/button.tsx

import React from 'react';
import classNames from 'classnames';

export const Button = ({
  children,
  className = '',
  variant = 'solid',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
}) => {
  return (
    <button
      className={classNames(
        'px-4 py-2 rounded font-medium transition-all',
        variant === 'solid' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'outline' && 'border border-blue-600 text-blue-600 hover:bg-blue-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
