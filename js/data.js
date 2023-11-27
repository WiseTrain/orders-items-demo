export const items = [{
        orderID: 1,
        itemID: 2001,
        width: 450,
        height: 600,
        qty: 1
    },
    {   
        orderID: 1,
        itemID: 2002,
        width: 300,
        height: 600,
        qty: 1
    }, 
    {
        orderID: 2,
        itemID: 2003,
        width: 600,
        height: 420,
        qty: 2
    }
]

export const orders = [
    {
        orderID: 1,
        clientName: "John Doe",
        address: "1 Queen street, Auckland",
        phone: "0274501399",
        date: "2023-11-30",
        summary: "Black plywood doors, 50 in total"
    },
    {
        orderID: 2,
        clientName: "Jason Jackson",
        address: "1 Ocean street, Christchurch",
        phone: "0274500011",
        date: "2023-11-01",
        summary: "Red solid wood doors, 50 in total"
    }
]

// create listener for coming data
export const data = {
    innerPosts: [],
    aListener: function(val) {},
    
    set posts(val) {
      this.innerPosts = val;
      this.aListener(val);
    },

    get posts() {
      return this.innerPosts;
    },
  
    registerListener: function(listener) {
      this.aListener = listener;
    }
  }

  // index.html:
//   data.registerListener(function(val) {
//     display_titles(val);
//   });
