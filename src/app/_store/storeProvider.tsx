// app/_store/reduxProvider.tsx
"use client";

import { useRef } from "react";
import makeStore, { AppStore } from "./store";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        // Create the store instance first time it is rendered
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
