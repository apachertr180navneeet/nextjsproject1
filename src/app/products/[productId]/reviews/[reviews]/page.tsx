export default function ReviewsDetailPage({ params }: { params: { productId: string, reviews: string } }) {
  return (
    <div>
      <h1>ReviewsDetailPage</h1>
      <p>Product ID: {params.productId}</p>
      <p>Review ID: {params.reviews}</p>
    </div>
  );
}