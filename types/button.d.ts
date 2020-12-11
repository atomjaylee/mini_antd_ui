import { componentSizeType, componentShapeType, baseComponent } from './component';

type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';

interface IButtonPropsType extends baseComponent {
  /** 按钮宽度调整为父宽度的选项 */
  block: boolean;
  /** 设置为危险按钮 */
  danger: boolean;
  /** 按钮失效状态 */
  disabled: boolean;
  /** 幽灵属性，按钮背景透明 */
  ghost: boolean;
  /** 点击跳转的地址 */
  href: string;
  /** 设置按钮载入状态 */
  icon: string;
  /** 设置按钮载入状态 */
  loading: boolean;
  /** 设置按钮形状 */
  shape: componentShapeType;
  /** 设置按钮大小 */
  size: componentSizeType;
  /** 设置按钮类型 */
  type: ButtonType;
  /** 点击按钮的回调函数 */
  onClick: (evt: tinyapp.IBaseEvent) => void;
}
