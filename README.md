# Switch

Switch组件

## 安装

`npm install --save react-widget-switch`


## 使用

[![Edit rw-widget-switch](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rw-widget-switch-or18b?fontsize=14&hidenavigation=1&theme=dark)

```js
import React from "react";
import Switch from "react-widget-switch";
import "react-widget-switch/style";

export default function App() {
  return (
    <div
      className="App"
      style={{
        padding: 100
      }}
    >
      <Switch />
    </div>
  );
}


```


### Interfaces

```ts
import React from "react";
export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "onClick"> {
    /** 组件样式前缀名 */
    prefixCls?: string;
    /** 类名称 */
    className?: string;
    /** 组件自动获取焦点 */
    autoFocus: boolean;
    /** 是否选中(受控) */
    checked: boolean;
    /** 初始是否选中 */
    defaultChecked: boolean;
    /** 开关大小，可选值：default small */
    size?: "small" | "default";
    /** 是否禁用 */
    disabled: boolean;
    /** 选中时的内容 */
    checkedChildren: React.ReactNode;
    /** 非选中时的内容 */
    unCheckedChildren: React.ReactNode;
    /** 改变时触发 */
    onChange: (checked: boolean, e: React.SyntheticEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onClick: (checked: boolean, e: React.MouseEvent) => void;
}
export interface SwitchState {
    checked: boolean;
}
export declare class Switch extends React.Component<SwitchProps, SwitchState> {
    static defaultProps: {
        prefixCls: string;
        tabIndex: number;
        defaultChecked: boolean;
    };
    static getDerivedStateFromProps(nextProps: SwitchProps, state: SwitchState): {
        checked: boolean;
    };
    nodeRef: React.RefObject<HTMLDivElement>;
    constructor(props: SwitchProps);
    fireChange(checked: boolean, e: React.SyntheticEvent): void;
    protected handleClick: (e: React.MouseEvent) => void;
    protected handleKeyDown: (e: React.KeyboardEvent) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Switch;


```

### defaultProps
```js
{
	prefixCls: "rw-switch",
}
```

### 基础样式

```css
.rw-switch {
    position: relative;
    display: inline-block;
    min-width: 44px;
    height: 22px;
    line-height: 22px;
    vertical-align: middle;
    border-radius: 20px 20px;
    background-color: #bfcbd9;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
}

.rw-switch-checked {
    background-color: #20a0ff;
}

.rw-switch-disabled {
    cursor: not-allowed;
    opacity: 0.4;
    outline: none;
}

.rw-switch-small {
    min-width: 28px;
    height: 16px;
    line-height: 16px;
}

.rw-switch-handler {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 2px;
    top: 2px;
    transition: all 0.3s;
}

.rw-switch-handler:after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 50% 50%;
    content: " ";
    background: #fff;
}

.rw-switch-small .rw-switch-handler {
    width: 12px;
    height: 12px;
}

.rw-switch-checked .rw-switch-handler {
    left: calc(100% - 18px - 2px);
}

.rw-switch-small.rw-switch-checked .rw-switch-handler {
    left: calc(100% - 12px - 2px);
}

.rw-switch-inner {
    color: #fff;
    font-size: 12px;
    display: block;
    margin: 0 7px 0 25px;
    transition: all 0.3s;
}

.rw-switch-checked .rw-switch-inner {
    margin: 0 25px 0 7px;
}

.rw-switch-small .rw-switch-inner {
    margin: 0 5px 0 18px;
}

.rw-switch-checked.rw-switch-small .rw-switch-inner {
    margin: 0 18px 0 5px;
}

```
