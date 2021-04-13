import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ShowsActionCreators from "./../redux/shows/showsActonCreators";
//ete sghaten actioncretornery---> tarber bajinner objektov
// const AllActionCreators={
// ...ShowsActionCreators,
// ...OtherActionCreator
// }
//AllActionCreators es bindActionCreators-um 1 parametr
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ShowsActionCreators, dispatch);
};
