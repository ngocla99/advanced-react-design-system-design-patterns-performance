import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { didAbort } from "../api/api";
import { searchMeals } from "../api/mealApi";

const useFetchMeals = () => {
  const [meals, setMeals] = useState([]);
  const abortRef = useRef({});

  const handleQuoteError = (error) => {
    if (didAbort(error)) {
      //Request aborted!
      toast.error("Request aborted!");
    } else {
      //Oh noooo, error!
      toast.error("Oh noooo, error!");
    }
  };

  const fetchMeals = async (query) => {
    try {
      abortRef.current.abort?.();

      const newMeals = await searchMeals(query, {
        abort: (abort) => (abortRef.current.abort = abort),
      });
      setMeals(newMeals);
    } catch (error) {
      handleQuoteError(error);
    }
  };

  return {
    meals,
    fetchMeals,
  };
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
  border-radius: 8px;
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
  background-color: ${(props) => (props.odd ? "#ccc" : "transparent")};
`;

const SearchMeal = () => {
  const [query, setQuery] = useState("");
  const { meals, fetchMeals } = useFetchMeals();

  useEffect(() => {
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
          {meals &&
            meals.map((meal, index) => (
              <MealItem odd={index % 2 !== 0} key={meal.idMeal}>
                <p>{meal.strMeal}</p>
              </MealItem>
            ))}
        </MealContainer>
      </div>
    </Container>
  );
};

export default SearchMeal;
