import Ingredients from "../components/usecallback-comps/ingredients";
import IngredientsInfoHelper from "../components/usecallback-comps/ingredients-info-helper";

export const UseCallbackDemo = () => {
  return (
    <>
      <Ingredients ingredientsInfoHelper={<IngredientsInfoHelper />} />
    </>
  );
};
