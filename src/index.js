import DragDropTouch from './DragDropTouch';
import touchpolyfill from './touchpolyfill';

export default editor => {
  touchpolyfill();
  DragDropTouch();
};
