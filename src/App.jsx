import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import AuthProvider from "./contexts/auth";
import Layouts from "./layouts";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Layouts />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
