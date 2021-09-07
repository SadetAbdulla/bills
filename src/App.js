import './App.css';
import  {FamilySection}from './components/FamilySection/FamilySection'
import  {BillsSection}from './components/BillsSection/BillsSection'


function App() {
  var data = {
    customerId: "12345",
    bills: [{
      invoiceId: "67890",
      amount: 1200,
      type: "evn"
    }]
  }
  return (
    <div>
      <BillsSection data={data} />
      <FamilySection />
    </div>
  );
}

export default App;
