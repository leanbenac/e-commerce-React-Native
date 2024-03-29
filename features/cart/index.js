import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/firebase";
import { PRODUCTS } from "../../Data/products";

const initialState = {
  value: {
    cart: [],
    response: {},
    loading: false,
    error: false,
  },
};

export const confirmPurchase = createAsyncThunk(
  "cart/confirm",
  //llamada asincrona con metodo POST
  async ({ items, userId, total }, asyncThunk) => {
    console.log(items);
    console.log(userId);
    // try lo usamos en casa de haber un error
    try {
      const res = await fetch(`${DB_URL}orders.json`, {
        method: "POST",
        body: JSON.stringify({
          date: new Date().toLocaleDateString(),
          id: Math.floor(Math.random() * 100000),
          userId: userId,
          items: items,
          total: total,
        }),
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      // console.log(state.value.products);
      const productoRepetido = state.value.cart.find(
        (producto) => producto.id === action.payload.id
      );
      console.log(productoRepetido);
      if (productoRepetido) {
        state.value.cart.map((item) => {
          if (item.id === action.payload.id) item.quantity++;
          return item;
        });
      } else {
        const producto = PRODUCTS.find(
          (producto) => producto.id === action.payload.id
        );
        state.value.cart.push({ ...producto, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.value.cart = state.value.cart.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(state.value.cart);
    },
    removeCart: (state) => {
      state.value.cart = [];
    },
  },

  //estados posibles
  extraReducers: {
    [confirmPurchase.pending]: (state) => {
      state.value.loading = true;
    },
    [confirmPurchase.fulfilled]: (state, { payload }) => {
      const saveOrders = Object.entries(payload).map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      state.value.response = saveOrders;
    },
    [confirmPurchase.rejected]: (state) => {
      state.value.loading = false;
      state.value.error = true;
    },
  },
});

export const { addItem, removeItem, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
