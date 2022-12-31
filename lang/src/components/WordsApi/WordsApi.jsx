import { observer, inject } from 'mobx-react';
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

function WordsApi({ children, wordStore }) {
  if (wordStore.isLoading) {
    return <Loader />;
  }

  if (wordStore.error) {
    return <Error />;
  }

  return <>{children}</>;
}

export default inject(['wordStore'])(observer(WordsApi));
