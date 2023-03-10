
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@mui/styles'
import { TextField, Card, CardActions, CardContent, CardMedia, Button, CircularProgress } from '@mui/material'
import axios from 'axios'
import { Web3Context } from '../providers/Web3Provider'

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    display: 'flex',
    margin: '15px 15px',
    flexGrow: 1
  },
  cardActions: {
    marginTop: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer'
  }
})

const defaultFileUrl = 'data:image/png;base64,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'

export default function NFTCardCreation({ addNFTToList }) {
  const [file, setFile] = useState(null)
  const [fileUrl, setFileUrl] = useState(defaultFileUrl)
  const classes = useStyles()
  const { register, handleSubmit, reset } = useForm()
  const { nftContract } = useContext(Web3Context)
  const [isLoading, setIsLoading] = useState(false)

  async function createNft(metadataUrl) {
    const transaction = await nftContract.mintToken(metadataUrl)
    const tx = await transaction.wait()
    const event = tx.events[0]
    const tokenId = event.args[2]
    return tokenId
  }

  function createNFTFormDataFile(name, description, file) {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('file', file)
    return formData
  }

  async function uploadFileToIPFS(formData) {
    const { data } = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }
    })

    return data.url
  }

  async function onFileChange(event) {
    if (!event.target.files[0]) return
    setFile(event.target.files[0])
    setFileUrl(URL.createObjectURL(event.target.files[0]))
  }

  async function onSubmit({ name, description, address, areage, formUses, usesTo }) {
    try {
      if (!file || isLoading) return
      setIsLoading(true)
      // const formData = createNFTFormDataFile(name, description, file)
      description = description + "///" + address + "///" + areage + "///" + formUses + "///" + usesTo;

      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      formData.append('file', file)

      const metadataUrl = await uploadFileToIPFS(formData)
      console.log(metadataUrl)
      const tokenId = await createNft(metadataUrl)
      addNFTToList(tokenId)
      setFileUrl(defaultFileUrl)
      reset()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className={classes.root} component="form" sx={{ maxWidth: 345 }} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="file-input">
        <CardMedia
          className={classes.media}
          alt='Upload image'
          image={fileUrl}
        />
      </label>
      <input
        style={{ display: 'none' }}
        type="file"
        name="file"
        id="file-input"
        onChange={onFileChange}
      />
      <CardContent sx={{ paddingBottom: 0 }}>
        <TextField
          id="name-input"
          label="T??n"
          name="name"
          size="small"
          fullWidth
          required
          margin="dense"
          disabled={isLoading}
          {...register('name')}
        />

        <TextField
          id="address-input"
          label="?????a ch???"
          name="address"
          size="small"
          fullWidth
          required
          margin="dense"
          disabled={isLoading}
          {...register('address')}
        />

        <TextField
          id="areage-input"
          label="Di???n t??ch (M??t vu??ng)"
          name="areage"
          size="small"
          fullWidth
          required
          margin="dense"
          disabled={isLoading}
          {...register('areage')}
        />

        <TextField
          id="formUses-input"
          label="H??nh th???c s??? d???ng"
          name="formUses"
          size="small"
          fullWidth
          required
          margin="dense"
          disabled={isLoading}
          {...register('formUses')}
        />

        <TextField
          id="usesTo-input"
          label="M???c ????ch s??? d???ng"
          name="usesTo"
          size="small"
          fullWidth
          required
          margin="dense"
          disabled={isLoading}
          {...register('usesTo')}
        />

        <TextField
          id="description-input"
          label="Ghi ch??"
          name="description"
          size="small"
          multiline
          rows={2}
          fullWidth
          required
          margin="dense"
          disabled={isLoading}
          {...register('description')}
        />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" type="submit">
          {isLoading
            ? <CircularProgress size="20px" />
            : 'Create'
          }
        </Button>
      </CardActions>
    </Card>
  )
}
