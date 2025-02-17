import Card from "./Card";

const DraggableCard = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] bg-[#f3f3f3]">
        <Card
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        >
          Card 1
        </Card>
        <Card
          style={{
            background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
          }}
        >
          Card 2
        </Card>
        <Card
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%)",
          }}
        >
          Card 3
        </Card>
      </div>
    </div>
  );
};

export default DraggableCard;
