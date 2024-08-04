import { reduxBatch } from '@manaflair/redux-batch'
import type { Store } from '@reduxjs/toolkit'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import configReducer, { initialConfigState } from '@src/reducers/configReducer'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  config: configReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const preloadedState: RootState = {
  config: initialConfigState,
}

export const createStore = (): Store<RootState> => {
  const enhancers = []
  enhancers.push(reduxBatch)
  const store = configureStore({
    devTools: true,
    enhancers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState,
    reducer: rootReducer,
  })

  return store
}
