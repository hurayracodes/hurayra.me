const TitleHeader = ({ title, sub }) => {
  return (
    <div className="m-12 leading-relaxed">
      <div>
        <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TitleHeader;
