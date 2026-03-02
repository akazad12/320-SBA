import { format } from "date-fns";

function NewsCard({ n }) {
  let time = n.time
  let score = n.score
  console.log(n)
  if (!time){
    time = n.created_at_i
    score = n.points
  }
  let formattedDate;
  const date = new Date(time *1000);
  formattedDate = format(date,"yyyy-MM-dd")


  return (
    <div >
      <h3>{n.title}</h3>
      <div style={{display:"flex", justifyContent:"center", gap: "20px"}}>
      <p>Likes: {score}</p>
      <p>Date Published: {formattedDate}</p>
      </div>
      {n.url && (
        <a href={n.url} >
          Read Article
        </a>
      )}
    </div>
  );
}

export default NewsCard;