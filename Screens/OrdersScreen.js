import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import OrderItem from "../Components/OrderItem";
import { ORDERS } from "../Data/order";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/orders";

const renderItem = ({ item }) => <OrderItem item={item} />;


const OrdersScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector (state => state.auth.value.user.userId);
  const orders = useSelector (state => state.orders.value.orders)
  const orderSelected = orders.filter(order => userId === order.userId)

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(orderSelected);

  return (
    <View style={styles.container}>
      <FlatList
        data={orderSelected}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
