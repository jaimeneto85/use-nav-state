# use-nav-state

useNavState is a hook for react that extends useState for ReactJS.

## Motivation

The motivation for this module was to do a simple state that interact with url and browser. With useNavState is updated, the values are sending to url params.

## Instalation

`npm i use-nav-state`

or

`yarn add use-nav-state`

## Usage

```javascript
const [value, setValue] = useNavState("value");
```

## Type

```typescript
type  TUseNavState  = [value: string, setValue: (value:  string) =>  void];

useNavState(key:  string, initialValue?:  string) :  TUseNavState
```

## Author

Github: @jaimeneto85
