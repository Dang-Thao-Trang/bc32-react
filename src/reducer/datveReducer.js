const init = {
  valueInput: {
    name: "",
    quantity: 0,
  },

  nameUser: "",
  quantitySeat: 0,
  danhSachGheShow: [],
  danhSachGheDangDat: [],
};

export const datveReducer = (state = init, action) => {
  switch (action.type) {
    case "INPUT": {
      const { name, value } = action.e.target;
      state.valueInput = { ...state.valueInput, [name]: value };
      return { ...state };
    }

    case "LOG_IN": {
      state.valueInput = { ...state.valueInput };
      return { ...state };
    }

    case "BOOK_SEAT": {
      let newArray = [...state.danhSachGheDangDat];
      let index = newArray.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );

      // ghế được chọn và được chọn lại lần nữa => xoá chọn
      if (index !== -1) {
        newArray.splice(index, 1);
      } else {
        // nếu ghế chưa chọn khi được chọn sẽ thêm vào mảng
        newArray.push(action.ghe);
      }
      // chọn nhiều hơn slg đã điền trong ô number of seat sẽ không thể chọn thêm
      if (newArray.length > +state.valueInput.quantity) {
        newArray.pop();
      }
      state.danhSachGheDangDat = newArray;
      return { ...state };
    }

    case "CONFIRM_SELECTION": {
      let newArray = [...state.danhSachGheShow];
      newArray = state.danhSachGheDangDat;
      state.nameUser = state.valueInput.name;
      state.quantitySeat = state.valueInput.quantity;
      state.danhSachGheShow = newArray;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
