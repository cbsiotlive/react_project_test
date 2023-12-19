const YourComponent = () => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://cbsiot.live/utkarsh/api.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              operation: 'read',
              data: 'energy',
            }),
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log('Fetched data:', data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array to run the effect only once when the component mounts
  
    return <div>Your component content here</div>;
  };
  
  export default YourComponent;