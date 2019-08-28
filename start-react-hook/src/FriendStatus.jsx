import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    console.log("CHAT API subscribe");
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      console.log("CHAT API unsubscribe");
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    }
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'offLine';
}

export default FriendStatus;
