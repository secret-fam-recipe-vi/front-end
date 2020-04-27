# front-end

// React 2 //
Manage State using context.
 - Array of users.
 - Containing 2 things. Credentials and Recipes.

 - Recipes (Contain Various Data)
    - Title of Recipe
    - Array of objects that includes ingredients and amount.

Endpoints:
`https://secret-fam-recipes.herokuapp.com/api`
`https://secret-fam-recipes.herokuapp.com/api/register`
`https://secret-fam-recipes.herokuapp.com/api/login`

// Dummy Data?

// users = [

//   user1: {
//       userId: Date.now()
//       credentials: {
//           username: 'created username',
//           password: 'created password'
//       },
//       recipes: [
//           {
//               recipeId: Date.now()
//               title: 'created title', (required)
                source: '' (Optional: Origin of recipe)
//               images: ['imgurl', 'imgurl', 'imgurl']
//               ingredients: [
//                   {
//                   ingredientName: 'ingredientName',
//                   ingredientAmount: 'ingredientAmount',
//                   }
//               ],
//               specialInstructions: 'Textarea for paragraph of specific instructions'
//           },

//           {
//             recipeId: Date.now()
//             title: 'created title',
//             images: ['imgurl', 'imgurl', 'imgurl']
//             ingredients: [
//                 {
//                 ingredientName: 'ingredientName',
//                 ingredientAmount: 'ingredientAmount',
//                 }
//             ],
//             specialInstructions: 'Textarea for paragraph of specific instructions'
                recipeType: [
                    (use a checkbox)
                ]
//         },
//       ]
//   },

//   user2: {
//       userId: Date.now()
//       credentials: {
//           username: 'created username',
//           password: 'created password'
//       },
//       recipes: [
//           {
//               recipeId: 0
//               title: 'created title',
//               images: ['imgurl', 'imgurl', 'imgurl']
//               ingredients: [
//                   {
//                   ingredientName: 'ingredientName',
//                   ingredientAmount: 'ingredientAmount',
//                   }
//               ],
//               specialInstructions: 'Textarea for paragraph of specific instructions'
//           },
//       ]
//   },
// ]



