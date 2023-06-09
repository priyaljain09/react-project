const user = {
    name: 'Heddy Lamarr',
    imageUrl:'https://cdn.zmescience.com/wp-content/uploads/2017/03/Sumatran_Tiger_Berlin_Tierpark.jpg',
    //imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
          width: user.imageSize,
         height: user.imageSize
          }}
        />
      </>
    );
  }