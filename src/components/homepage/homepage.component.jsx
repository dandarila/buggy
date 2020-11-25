import React from 'react'

import CustomizedTables from '../customized-table/customized-table.component'

function HomePage() {
  return (
    <div>
      <CustomizedTables pageSize={3} />
    </div>
  )
};


export default HomePage;
