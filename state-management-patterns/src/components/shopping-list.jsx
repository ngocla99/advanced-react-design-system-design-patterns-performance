import React, { useReducer } from "react";
import ShoppingListHeader from "./shopping-list-header";
import ShoppingListRow from "./shopping-list-row";
import styled from "styled-components";
import { useImmerReducer } from "use-immer";

const StyledContainer = styled.div`
  padding-top: 2rem;
  max-width: 4xl;
  margin: 0 auto;
  text-align: left;
`;

const StyledWrapper = styled.div`
  max-width: xs;
`;

const StyledAddItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;
  max-width: xs;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledButton = styled.button`
  align-self: flex-end;
  padding: 0.5rem 1rem;
  background-color: #86c784;
  color: #1a472a;
`;

//Generate an id for new shopping list items
const getUuid = () => "_" + Math.random().toString(36).substr(2, 9);

//Initial state for the shopping list reducer
const shoppingItems = {
  newShoppingItemName: "",
  items: [
    {
      id: "1",
      name: "Sea Salt",
    },
    {
      id: "2",
      name: "Apples",
    },
    {
      id: "3",
      name: "Chicken breasts",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NEW_SHOPPING_ITEM_NAME":
      state.newShoppingItemName = action.payload;
      break;
    case "ADD_ITEM":
      state.newShoppingItemName = "";
      state.items = [...state.items, action.payload];
      break;
    case "UPDATE_ITEM":
      state.items.splice(action.payload.index, 1, action.payload.item);
      break;
    case "DELETE_ITEM":
      state.items.splice(action.payload.index, 1);
      break;
    default:
  }

  return state;

  // switch (action.type) {
  //   case "UPDATE_NEW_SHOPPING_ITEM_NAME":
  //     return {
  //       ...state,
  //       newShoppingItemName: action.payload,
  //     };
  //   case "ADD_ITEM":
  //     return {
  //       ...state,
  //       newShoppingItemName: "",
  //       items: [...state.items, action.payload],
  //     };
  //   case "UPDATE_ITEM":
  //     return {
  //       ...state,
  //       items: state.items.map((item, idx) => {
  //         if (idx === action.payload.index) {
  //           return action.payload.item;
  //         }
  //         return item;
  //       }),
  //     };
  //   case "DELETE_ITEM":
  //     return {
  //       ...state,
  //       items: state.items.filter((_, idx) => idx !== action.payload.index),
  //     };
  //   default:
  //     return state;
  // }
};

const ShoppingList = (props) => {
  const [shoppingList, dispatch] = useImmerReducer(reducer, shoppingItems);
  const addItem = () => {
    if (!shoppingList.newShoppingItemName) return;
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: getUuid(),
        name: shoppingList.newShoppingItemName,
      },
    });
  };
  const deleteItem = (item) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };
  const updateItem = (payload) => {
    dispatch({
      type: "UPDATE_ITEM",
      payload,
    });
  };
  const onChangeShoppingListItemName = (e) => {
    dispatch({
      type: "UPDATE_NEW_SHOPPING_ITEM_NAME",
      payload: e.target.value,
    });
  };
  return (
    <StyledContainer>
      <StyledWrapper>
        <ShoppingListHeader shoppingList={shoppingList.items} />
        <div style={{ marginBottom: "1.5rem" }}>
          {shoppingList.items.map((item, index) => (
            <ShoppingListRow
              key={item.id}
              item={item}
              index={index}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          ))}
        </div>
        <StyledAddItemContainer>
          <StyledLabel htmlFor="shoppingItemField">Add item</StyledLabel>
          <StyledInput
            type="text"
            id="shoppingItemField"
            value={shoppingList.newShoppingItemName}
            onChange={onChangeShoppingListItemName}
          />
          <StyledButton onClick={addItem}>Add</StyledButton>
        </StyledAddItemContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};
export default ShoppingList;
