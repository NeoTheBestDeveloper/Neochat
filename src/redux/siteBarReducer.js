import avaJane from './../img/7.jpg';
import avaMark from './../img/30.jpg';

let initState = {
  friendsData: [
    { id: 1, name: "Jane", ava: avaJane },
    { id: 2, name: "Mark", ava: avaMark }
  ],
}

const siteBarReducer = (state = initState, action) => {

  switch (action.type) {
    default:
      return state;
  }

}

export default siteBarReducer;