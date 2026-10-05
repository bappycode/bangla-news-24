import Image from "next/image";

interface InewsCard {
    id: string,
    category : string,
    title: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
}

const NewsCard = ({ news }: {news : InewsCard}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <Image
              src={news.imageUrl}
              alt={news.imageAlt}
              height={300}
              width={400}
            />
          </figure>
          <div className="card-body">
            <p className="text-red-500 semi-bold">{news.category}</p>
            <h2 className="card-title">{news.title}</h2>
            <p>{news.description}</p>
            </div>
          </div>
    );
};

export default NewsCard;