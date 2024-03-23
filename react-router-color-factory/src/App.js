import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import Nav from "./Nav";
import Login from "./Login";
import Color from './Color';
import ColorsList from "./ColorsList";
import NewColorForm from "./NewColorForm";
import { useLocalStorage } from "./hooks/useLocalStorage";

import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./ProtectedRoute";


function App() {
  const [hexCodes, setHexCodes] = useLocalStorage('colors', []);
  const addHexCode = (color) => {
      const arr = [...hexCodes, {
          id: color.id,
          hex: color.hex.slice(1)
      }]
      setHexCodes(arr);
  }

  return (
    <AuthProvider>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/login" element={<Login />} />
          <Route path="/colors" element={
              <ProtectedRoute>
                <ColorsList colors={hexCodes} />
              </ProtectedRoute>
            } />
            <Route path="/colors/:color" element={
              <ProtectedRoute>
                <Color hexCodes={hexCodes} />
              </ProtectedRoute>
            } />
            <Route path="/colors/new" element={
              <ProtectedRoute>
                <NewColorForm addHexCode={addHexCode} />
              </ProtectedRoute>
            } />
          <Route path="*" element={<Navigate replace to="/colors" />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
