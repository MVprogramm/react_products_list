TASK: simple e-commerce UI

{

  task.map:
  {
                              <--CartTitle
                              |
    index<- App<- ShoppingCart<-- ProductsList
               |
               <-- Profile<--UserForm
  }

  task.Components:
  {
    App:
    {
      props: userData,
      state: userData,
      render: ShoppingCard, Profile
    }
    ShoppingCard:
    {
      props: userName,
      state: ProductsList,
      render: CartTitle, ProductsList
    }
    Profile:
    {
      props: userData,
      state: -,
      render: UserForm
    }
    UserForm:
    {
      props: userData,
      state: -,
      render: input firstName/lastName
    }
    CardTitle:
    {
      props: count, userName,
      state: -,
      render: `${userName}, you added ${count} items.`

    }
    ProductsList:
    {
      props: cartItems,
      state: -,
      render: productsList, total
    }
  }

  task.data:
  {
    userData --> App --> ShoppingCard --> CardTitle --> render
                     |
                     --> Profile --> UserForm --> render

    productsList --> ShoppingCard --> ProductsList --> render
  }
  

  





