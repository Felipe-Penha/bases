const Group = () => {
  return (
    <div className={`group`}>
      <h2 className={`group-title`}>Grupo</h2>
      <div className={`group-cards`}>
        <div className={`group-card`}>
          <img className={`group-card-img`} src='arthur.png' />
          <h2 className={`group-card-text`}>Arthur Ferreira</h2>
        </div>

        <div className={`group-card`}>
          <img className={`group-card-img`} src='natasha.png' />
          <h2 className={`group-card-text`}>Natasha Oliveira</h2>
        </div>

        <div className={`group-card`}>
          <img className={`group-card-img`} src='leonardo.png' />
          <h2 className={`group-card-text`}>Leonardo Dalbem</h2>
        </div>
      </div>
    </div>
  );
};

export default Group;
