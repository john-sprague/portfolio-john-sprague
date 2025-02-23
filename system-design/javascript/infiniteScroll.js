import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const generateFakeTweet = (id) => ({
  id,
  user: `User${id}`,
  content: `This is tweet number ${id}.`,
});

export default function TwitterHome() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMoreTweets();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadMoreTweets = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setTweets((prev) => [
        ...prev,
        ...Array.from({ length: 10 }, (_, i) => generateFakeTweet(prev.length + i + 1)),
      ]);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 20
    ) {
      loadMoreTweets();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      {tweets.map((tweet) => (
        <Card key={tweet.id} className="mb-3 p-4 border rounded-lg shadow">
          <CardContent>
            <h2 className="font-semibold">{tweet.user}</h2>
            <p>{tweet.content}</p>
          </CardContent>
        </Card>
      ))}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
    </div>
  );
}
