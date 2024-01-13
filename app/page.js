import Image from 'next/image'
import styles from './page.module.css'
import moment from 'moment'
async function getData(page) {
  const options = {
    method: 'POST',
    body: JSON.stringify({
        "page": page,
        "size": 20,
        "type": 2,
        "status": 1,
        "fuzzy": ""
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  }
  const res = await fetch('https://dlsjf.top/api/grabbag/getList',options) 
  return res.json()
}

export default async function Home(props) {
  const { page } = props.searchParams 
  const result = await getData(page||1)
  const { list, currentPage, totalPage } = result.data
  return (
    <main className="min-h-screen pl-2 pr-2">
        <input></input>
        <Image
          src="https://images.pexels.com/photos/19837460/pexels-photo-19837460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={500}
          height={500}
          fill={false} 
          object-fit="contain"
          className={styles.headImage}
          alt="Picture of the author"
        />
          {
            list.map(e=>{
                return (
                  <>
                    <div className='p-2 border-b border-slate-400 '>
                      <a href={`/details/${e.id}`}>{ e.title }</a>
                      <div className='text-slate-400'>
                        {moment(e.created_date).format('MM-DD') }
                      </div>

                    </div>
                  </>
                )
            })
          }
          <div className='p-2'>
            {
              page>1 && <a className={`${styles.btn} ${styles.btnLeft}`} href={`/?page=${Number(currentPage)-1}`}>
                上一页
              </a>
            }
            {
              (Number(currentPage)< Number(totalPage))&&<a className={`${styles.btn} ${styles.btnRight}`} href={`/?page=${Number(currentPage)+1}`}>
                下一页
              </a>
            }
          </div>
          <footer className='h-12'></footer>
    </main>
  )
}
