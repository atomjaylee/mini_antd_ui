import fmtClass from '../_utils/fmtClass';
import fmtEvent from '../_utils/fmtEvent';
var defaultProps = {
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
  onClick: function onClick() {}
};
var prefixCls = 'py-button';
Component({
  props: defaultProps,
  data: {
    baseClasses: prefixCls
  },
  onInit: function onInit() {
    this.setData({
      baseClasses: this.wrapClasses()
    });
    console.log(this.data.baseClasses);
  },
  methods: {
    wrapClasses: function wrapClasses() {
      var _fmtClass;

      var _this$props = this.props,
          block = _this$props.block,
          danger = _this$props.danger,
          shape = _this$props.shape,
          size = _this$props.size,
          type = _this$props.type,
          ghost = _this$props.ghost,
          loading = _this$props.loading,
          disabled = _this$props.disabled;
      var sizeCls = '';

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

      return fmtClass((_fmtClass = {}, _fmtClass[prefixCls + "-block"] = !!block, _fmtClass[prefixCls + "-dangerous"] = !!danger, _fmtClass[prefixCls + "-" + shape] = shape, _fmtClass[prefixCls + "-" + type] = type, _fmtClass[prefixCls + "-" + sizeCls] = sizeCls, _fmtClass[prefixCls + "-background-ghost"] = !!ghost, _fmtClass[prefixCls + "-loading"] = loading, _fmtClass[prefixCls + "-disabled"] = disabled, _fmtClass));
    },
    handleClick: function handleClick(e) {
      var event = fmtEvent(this.props, e);
      this.props.onClick && this.props.onClick(event);
    }
  }
});