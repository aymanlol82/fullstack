import {useEffect , useState , useContext} from 'react'
import {APIContext} from '../../shared/provider/APIProvider'
import StarWarsAPIService from '../../shared/api/service/StarWarsAPIService'


export const APIPage = () => {
	const [datatype, setDataType] = useState()
	const [personensID, setPersonensID] = useState('')
	const [data,setData]= useContext(APIContext)

    const apitypes =[
		{ label: 'people', value: '/people/' },
		{ label: 'planets', value: '/planets/' },
		{ label: 'starships', value: '/starships/' }
	]
	
	const onChangeHandler = (event) => {
		setDataType(event.target.value)
	}
	
	const fetchPerson =async () => {
		try{
				const response = await StarWarsAPIService.getStarWarsPersonens(datatype+personensID)
				setData(response.data)
		} catch (error) {
			console.log(error)
			setData('')
		}
		}
	
	useEffect(() => {
		fetchPerson()
	}, [ datatype+personensID])
			

	return (
		<div>
			<select onChange={onChangeHandler}> 
			 <option value=" Select API "> -- Select a API -- </option>
			 {apitypes.map((apitype) => <option key={apitype.label} value={apitype.value}>{apitype.label}</option>)}
			</select><br/>
			<input placeholder='serach for character ID' onChange={event => setPersonensID(event.target.value)}/><br/>
			<h1>Name :{data?.name}</h1>
			<h1>url :{data?.url}</h1>
		</div>
	)
}
	