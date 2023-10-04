const Card = () => {
  return (
    <div className="w-full rounded-lg p-4 border-1 border">
      <div className="w-full rounded-lg bg-slate-600 h-[200px] mb-5"></div>
      <div>
        <h2 className="card-title text-[27px] font-bold">
          💥 Frontend dasturchilari uchun Top-12 ta tekin API
        </h2>
        <div>
          <p>
            Ushbu API'larni ishlatib korib siz dasturlashda asinxron, fake
            backend bilan ishlab ozingizni tajribangizni oshirishingiz mumkin.
          </p>
        </div>
        <div>
          <h3>● Abdulloh Qiyomov</h3>
        </div>
        <div className="w-full flex gap-4">
          <p>data</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
