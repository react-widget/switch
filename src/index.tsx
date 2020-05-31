import React from "react";
import classnames from "classnames";

export const version = "%VERSION%";

export interface SwitchProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "onClick"> {
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

const LEFT_KEY = 37;
const RIGHT_KEY = 39;

export class Switch extends React.Component<SwitchProps, SwitchState> {
	static defaultProps = {
		prefixCls: "rw-switch",
		tabIndex: 0,
		defaultChecked: false,
	};

	static getDerivedStateFromProps(nextProps: SwitchProps, state: SwitchState) {
		return {
			checked: nextProps.checked === undefined ? state.checked : nextProps.checked,
		};
	}

	nodeRef: React.RefObject<HTMLDivElement> = React.createRef();

	constructor(props: SwitchProps) {
		super(props);

		this.state = { checked: props.defaultChecked };
	}

	fireChange(checked: boolean, e: React.SyntheticEvent) {
		if (this.props.disabled) return;

		if (this.props.checked === undefined) {
			this.setState({
				checked,
			});
		}

		this.props.onChange?.(checked, e);
	}

	protected handleClick = (e: React.MouseEvent) => {
		const { onClick } = this.props;

		const nextChecked = !this.state.checked;

		this.fireChange(nextChecked, e);

		onClick?.(nextChecked, e);
	};

	protected handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.keyCode === LEFT_KEY) {
			this.fireChange(false, e);
		} else if (e.keyCode === RIGHT_KEY) {
			this.fireChange(true, e);
		}

		this.props.onKeyDown?.(e);
	};

	componentDidMount() {
		if (this.props.autoFocus && this.nodeRef.current) {
			this.nodeRef.current.focus();
		}
	}

	render() {
		const {
			className,
			prefixCls,
			disabled,
			size,
			tabIndex,
			checkedChildren,
			unCheckedChildren,
			onChange,
			autoFocus,
			checked,
			defaultChecked,
			...restProps
		} = this.props;
		const isChecked = this.state.checked;
		const switchClassName = classnames(prefixCls, {
			[`${prefixCls}-small`]: size === "small",
			[`${prefixCls}-checked`]: isChecked,
			[`${prefixCls}-disabled`]: disabled,
			[className!]: className,
		});

		return (
			<div
				{...restProps}
				role="switch"
				ref={this.nodeRef}
				className={switchClassName}
				tabIndex={disabled ? -1 : tabIndex}
				onKeyDown={this.handleKeyDown}
				onClick={this.handleClick}
			>
				<div className={`${prefixCls}-handler`}></div>
				<div className={`${prefixCls}-inner`}>
					{isChecked ? checkedChildren : unCheckedChildren}
				</div>
			</div>
		);
	}
}

export default Switch;
