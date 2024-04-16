import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { didAbort } from "../api/api";
import { searchMeals } from "../api/mealApi";

const useFetchMeals = () => {
  const [meals, setMeals] = React.useState([]);
  const abortRef = React.useRef({});

  const handleQuoteError = (error) => {
    console.log("🚀 ~ handleQuoteError ~ error:", error);
    if (didAbort(error)) {
      toast.error("Request aborted!");
    } else {
      toast.error("Oh no, error!");
    }
  };

  const fetchMeals = async (query) => {
    try {
      abortRef.current.abort?.();
      const newMeals = await searchMeals(query, {
        abort: (abort) => (abortRef.current.abort = abort),
      });
      setMeals(newMeals ?? []);
    } catch (err) {
      handleQuoteError(err);
    }
  };

  return { meals, fetchMeals };
};

const Container = styled.div`
  padding-top: 8px;
  max-width: 2xl;
  margin: auto;
`;

const Form = styled.form`
  margin-bottom: 8px;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2xl;
  margin-bottom: 4px;
`;

const MealContainer = styled.div`
  max-height: 60;
  overflow-y: auto;
`;

const MealItem = styled.div`
  padding: 1px;
  background-color: ${(props) =>
    props.odd === "true" ? "#ccc" : "transparent"};
`;

export const SearchMeal = () => {
  const [query, setQuery] = React.useState("");
  const { meals, fetchMeals } = useFetchMeals();

  React.useEffect(() => {
    fetchMeals(query);
  }, [query]);

  return (
    <Container>
      <ToastContainer />
      <Form>
        <Fieldset>
          <Label htmlFor="meal">Find your lovely meal</Label>
          <Input
            type="text"
            autoComplete="off"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            id="meal"
          />
        </Fieldset>
      </Form>
      <div>
        <Title>Meals</Title>
        <MealContainer>
          {meals.map((meal, index) => (
            <MealItem odd={(index % 2 !== 0).toString()} key={meal.idMeal}>
              <p>{meal.strMeal}</p>
            </MealItem>
          ))}
        </MealContainer>
      </div>
    </Container>
  );
};
