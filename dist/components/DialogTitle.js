Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/DialogTitle.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Constants=require('../constants/Constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var babelPluginFlowReactPropTypes_proptype_DialogTitleProps=require('../type').babelPluginFlowReactPropTypes_proptype_DialogTitleProps||require('prop-types').any;var isAndroid=_reactNative.Platform.OS==='android';var styles=_reactNative.StyleSheet.create({title:{padding:24,paddingLeft:18,paddingRight:18,borderTopLeftRadius:8,borderTopRightRadius:8},titleBar:{padding:14,borderBottomWidth:0.5,backgroundColor:'#F9F9FB',borderColor:'#DAD9DC'},titleText:{fontWeight:isAndroid?'400':'500',fontFamily:isAndroid?'sans-serif-medium':'System',fontSize:isAndroid?19:15,color:'#151822'}});function DialogTitle(_ref){var title=_ref.title,style=_ref.style,textStyle=_ref.textStyle,hasTitleBar=_ref.hasTitleBar,align=_ref.align;var titleBar=hasTitleBar?styles.titleBar:null;var titleItemsAlign={alignItems:_Constants.Positions[align]};return _react2.default.createElement(_reactNative.View,{style:[styles.title,titleItemsAlign,titleBar,style],__source:{fileName:_jsxFileName,lineNumber:44}},_react2.default.createElement(_reactNative.Text,{style:[styles.titleText,textStyle],__source:{fileName:_jsxFileName,lineNumber:45}},title));}DialogTitle.propTypes=babelPluginFlowReactPropTypes_proptype_DialogTitleProps===require('prop-types').any?{}:babelPluginFlowReactPropTypes_proptype_DialogTitleProps;DialogTitle.defaultProps={align:'center',style:null,textStyle:null,hasTitleBar:true};exports.default=DialogTitle;