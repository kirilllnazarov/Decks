import type { AppRootState } from "./store";

export const selectLoader = (state: AppRootState) => state.app.status
export const selectError = (state: AppRootState) => state.app.error