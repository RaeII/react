import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as easyWhite } from './easyWhite.svg';
import { ReactComponent as  easyBlack} from './easyBlack.svg';
import { ReactComponent as btnThemeBlack } from './btnThemeBlack.svg';
import { ReactComponent as  btnThemeWhite} from './btnThemeWhite.svg';

const EasyIcon = ({theme}) =>{

  const easyIconTheme = theme === 0 ?  easyBlack : easyWhite

  return <SvgIcon component={easyIconTheme} sx={{ mr:0, width: 89, height:36}} inheritViewBox='true'/>

}

const BtnTheme = ({theme,click}) =>{

  const easyIconTheme = theme === 0 ?  btnThemeBlack : btnThemeWhite
  
  return <SvgIcon onClick={(click)} component={easyIconTheme} sx={{ mr:0, width: 64.8, height:36}} inheritViewBox='true'/>

}

export {EasyIcon,BtnTheme}