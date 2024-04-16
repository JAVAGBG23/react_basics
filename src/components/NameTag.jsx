const NameTag = ({ firstName, lastName, style }) => {
  return (
    <div className="nametag" style={style}>
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default NameTag;
