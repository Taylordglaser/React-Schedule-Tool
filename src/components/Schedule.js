//Remove from DB function...
//Needs to receive data as props from ScheduleTool.js

//Removes gigs afte they pass
const currentDate = new Date()
const gigTestDate = new Date(2022, 0, 3, 9)
console.log(currentDate.toDateString())
console.log(gigTestDate.toDateString())

if (currentDate.getTime() > gigTestDate.getTime()) {
    console.log('activate pretend delete function')
  } else {
      console.log('Display Gig')
  }

//Schedule Component
    const Schedule = (props) => {

    //Displays a table and maps items from the data
    return (
      <div className="schedule">
        <h2>Schedule</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Address</th>
                </tr>

                <tbody id="myTable">
                    <tr>
                        <td>{props.gigs.map(item => <p>{item.name}</p>)}</td>
                        <td>{props.gigs.map(item => <p>{item.date}</p>)}</td>
                        <td>{props.gigs.map(item => <p>{item.address}</p>)}</td>
                    </tr>
                </tbody>
            </table>
      </div>
    )
  }

  Schedule.defaultProps = {
    gigs : [
        {
            id: 0,
            name: 'Battle of the Bands',
            date: Date(2022, 10, 9, 9),
            address: '101 Red Oak St, Ector, TX 75439' 
        },
        {
            id: 1,
            name: 'Rock the Dock',
            date: Date(2022, 6, 7, 9),
            address: '215 Kipp Ave, Kemah, TX 77565' 
        },
        {
            id: 2,
            name: 'White Oak Musical Hall',
            date: Date(2022, 2, 27, 9),
            address: '2915 Main St, Houston, TX 77009' 
        },            {
            id: 3,
            name: 'Karnak Temple Complex',
            date: 'TBA',                
            address: 'PM92+CP3, Luxor City, Luxor' 
        }
    ]
  }
  
  export default Schedule;