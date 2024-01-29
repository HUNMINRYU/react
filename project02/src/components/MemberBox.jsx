const MemberBox = ({name, gender, music}) => {
  return (
    <div className="item-border">
      <p>이름: {name}</p>
      <p>성별: {gender}</p>
      <p>좋아하는 음악: {music}</p>
    </div>
  );
};

export default MemberBox;
