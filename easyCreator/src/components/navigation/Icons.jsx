import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as listIconDisable } from './listDisable.svg';
import { ReactComponent as  listIconEnable} from './listEnable.svg';
import { ReactComponent as puzzleIconDisable } from './puzzleDisable.svg';
import { ReactComponent as  puzzleIconEnable} from './puzzleEnable.svg';
import { ReactComponent as  alertIconEnable} from './alertEnable.svg';
import { ReactComponent as  alertIconDisable} from './alertDisable.svg';

const Puzzle = ({index}) =>{
  
  const PuzzleIcon = index === 0 ?  puzzleIconEnable : puzzleIconDisable

  return <SvgIcon component={PuzzleIcon} inheritViewBox='true'/>

}

const Alert = ({index}) =>{

  const AlertIcon = index === 1 ?  alertIconEnable : alertIconDisable

  return <SvgIcon component={AlertIcon} inheritViewBox='true'/>

}

const List = ({index}) =>{

  const ListIcon = index === 2 ?  listIconEnable : listIconDisable

  return <SvgIcon component={ListIcon} inheritViewBox='true'/>

}

export {Puzzle,List,Alert}