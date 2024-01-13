import { Remarkable } from 'remarkable'
import moment from 'moment'
const md = new Remarkable()
async function getData(id) {
  const options = {
    method: 'POST',
    body: JSON.stringify({
        "id": id,
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  }
  const res = await fetch('https://dlsjf.top/api/grabbag/getContent',options) 
  return res.json()
}

export default async function Details(props) {
    const result = await getData(props.params.id)
    const { data }= result
    console.log(data[0].title);
    // const __html = { __html: md.render(data[0].marked)  }
    const __html = { __html: data[0].content }
    return (
      <main className="min-h-screen pl-2 pr-2 space-y-6">
          <h1 className='text-2xl pt-2'>{ data[0].title }</h1>
          <p className='text-gray-500'>发布日期 {moment(data[0].created_date).format('YYYY-MM-DD')}</p>
          <div className=''>
              <div dangerouslySetInnerHTML={__html} />
          </div>
      </main>
    )
  }
  