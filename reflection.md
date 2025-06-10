# Reflection

1. How did you handle optional props in your components?

   Optional props were handled with conditional expressions in the TSX, so that the relevant elements are only displayed when the property is passed and/or the showXXX flag is set to true.

2. What considerations did you make when designing the component interfaces?

   The styling for the component interfaces were made to look nice and be flexible enough to handle different images, amounts of text shown, and multiple screen sizes.

3. How did you ensure type safety across your components?

   Using TypeScript interfaces and static typing allowed use to provide a consistent interface to our developers, so that they always provide information in the correct format for good display.

4. What challenges did you face when implementing component composition?

   Using the children prop made component composition easy, so there weren't really any major issues with this capability.
