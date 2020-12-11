import { IButtonPropsType } from '../../types/index';
import fmtClass from '../_utils/fmtClass';
import fmtEvent from '../_utils/fmtEvent';

const defaultProps: IButtonPropsType = {
  block: false,
  danger: false,
  disabled: false,
  ghost: false,
  href: '',
  icon: '',
  loading: false,
  shape: 'round',
  size: 'middle',
  type: 'default',
  onClick: () => {},
};

const prefixCls = 'py-button';

Component({
  props: defaultProps,
  data: {
    baseClasses: prefixCls,
  },

  onInit() {
    this.setData({ baseClasses: this.wrapClasses() });
    console.log(this.data.baseClasses);
  },

  methods: {
    wrapClasses() {
      const { block, danger, shape, size, type, ghost, loading, disabled } = this.props;

      let sizeCls = '';
      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;
        case 'small':
          sizeCls = 'sm';
          break;
        default:
          break;
      }

      return fmtClass({
        [`${prefixCls}-block`]: !!block,
        [`${prefixCls}-dangerous`]: !!danger,
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-background-ghost`]: !!ghost,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-disabled`]: disabled,
      });
    },

    handleClick(e) {
      const event = fmtEvent(this.props, e);
      this.props.onClick && this.props.onClick(event);
    },
  },
});
