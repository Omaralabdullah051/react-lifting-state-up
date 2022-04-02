
//Lifting state up:
//lifting state up is nothing but a pattern.the uses of lifting state up pattern is useful for reducing code repeatation and easy to debug.
//when the child components have same state and functionality;we can lift the shared state up to their closest common parent-component.And we pass these common state and functionality to child components via props because of react's top-down data flow(unidirectional). Now we reduces the code repeatation.

//But here are some prop drilling issues on large application. so, we need to use it on a simple application;where our main focus is to reduce the code repeatation and make the debug easier.