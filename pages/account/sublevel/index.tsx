import Link from 'next/link'
import { Edit, Trash } from 'react-feather'
import List from '../../../layout/List'
import { subLevelType } from '../../../types/models'

const Index = (props: { sublevels: subLevelType[] }) => {

    const handleDelete = async (id: string) => {
        if(window.confirm("Are you sure you want to delete it?")){
            const data = await fetch(`/api/sublevel/${id}`, { method: "DELETE" }).then(res => res.json())

            if(data.status==='success'){
                window.location.reload()
            }else{
                console.log(data.message);
            }
        }
    }

  return (
    <List title="Sub Level">
        <>
            {
                props.sublevels?.map(level => (
                    <div key={level._id} className="border border-indigo-300 p-4 rounded-md bg-indigo-200/20 flex flex-col justify-between">
                        <h4 className="underline">{level.name}</h4>
                        <p className="h-14 overflow-ellipsis">{level.description}</p>
                        <div>
                            <div className="flex gap-2 justify-end mt-3">
                                <Link href={`/account/sublevel/edit/${level._id}`}>
                                    <span className="cursor-pointer" title="Edit level">
                                        <Edit className="text-blue-500 dark:text-blue-300 w-5" />
                                    </span>
                                </Link>
                                <Trash className="cursor-pointer text-red-500 dark:text-red-400 w-5" onClick={()=>handleDelete(level._id)} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    </List>
  )
}

export default Index

export async function getServerSideProps(){
    const res = await fetch(`http://localhost:3000/api/sublevel`, { method: "GET" })
    const data = await res.json()

    return {
        props: {
            sublevels: data.sublevels,
        }
    }
}
// ?createrId=${process.env.TEST_USER_ID}