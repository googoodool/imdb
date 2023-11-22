function Results({ results }) {
  return (
    <div>
      {results.map((res) => {
        return <div key={res.id}>{res.original_name}</div>;
      })}
    </div>
  );
}
export default Results;
