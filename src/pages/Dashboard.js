const Dashboard = ({user}) => {
  return (
    <section className='section'>
      <h3>hello,{user?.name} </h3>
    </section>
  );
};
export default Dashboard;
