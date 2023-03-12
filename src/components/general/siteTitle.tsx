type Props = {
  title:string;
}

function SiteTitle({title}: Props) {
  return (
    <h1 className="text-6xl font-caveat capitalize py-4 font-bold">
      {title}
    </h1>
  )
}

export default SiteTitle