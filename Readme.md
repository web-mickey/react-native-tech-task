# Recruitment task

This repository contains a simple mobile application built as a recruitment task. It uses the [Poke API](https://pokeapi.co/) to fetch data and display information about various Pokémon.

## Features

- A dashboard that displays a list of Pokémon (limited to the first 300 entries).
- A detailed view that opens when a Pokémon's name is clicked on the dashboard.
- A search box on the dashboard page that enables filtering through Pokémon names.
- A custom splash screen upon app launch.

## Tech Stack

- Expo
- React Native
- TypeScript
- React Query
- React Navigation
- Axios
- Lodash
- React Icons
- Jest
- React Testing Library for React Native

## Testing

The application includes a few basic tests for critical functionalities such as data fetching, error handling, and loading states.

## Additional Information

- Custom hooks for fetching list of pokemons and pokemon details data.
- Layout component for all the pages.
- Global colors.
- Custom component wrapping default React Native Text component.

## Potential Enhancements

- Additional filters (I am not sure whether the Poke API supports such filtering during the fetch operation).
- More comprehensive testing.
- More details in the Pokémon detail view.
- UI library for enhanced UI design.
- Adding custom icons, favicon etc.

## Cross-Platform Compatibility

The application is compatible with both Android and iOS platforms.

## Running the Application

To run the application, follow these simple steps:

1. Install dependencies with `yarn`.
2. Start the application:
   - For Android, run `yarn android`.
   - For iOS, run `yarn ios`.
