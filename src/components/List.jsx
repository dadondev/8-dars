import Item from "./Item";
export const datas = [
  {
    name: "kun.uz",
    hero: "Hello ! I'm frontend dev",
  },
  {
    name: "my.gov.uz",
    hero: "Hello ! I'm backend dev",
  },
  {
    name: "daryo.uz",
    hero: "Hello ! I'm fullstack dev",
  },
];

function List() {
  return (
    <div class="mockup-browser-toolbar flex items-center gap-2">
      {datas.map((e, i) => (
        <Item item={e} key={i} />
      ))}
    </div>
  );
}

export default List;
