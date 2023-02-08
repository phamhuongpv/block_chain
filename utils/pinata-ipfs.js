import axios from 'axios'
import FormData from 'form-data'
import fs from 'fs'

// tạo tài khoản pinata => vào tab developer https://app.pinata.cloud/developers => chọn "+ New Key" => copy JWT
const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyYjU0NmE5Ny00MDlmLTRhYzMtYTVmOS01MmQyNGQ5YjcxOWIiLCJlbWFpbCI6Im5ndXllbm5nb2NodW5nLm5jdGhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjBhODBmNmFjNzU3ZTE2ZDkwMzdhIiwic2NvcGVkS2V5U2VjcmV0IjoiYjhmZWZhYmVmY2Q4M2E2YWNjMzE4MWFhN2E4ZTNiNDNmZWRhNzExZTU1YjQ0ZmMwNDgxYTVhMDQ1YmUxZmE1NyIsImlhdCI6MTY3NTU2NDk5OH0.VR7CwlQucPAWkhV2wobTECw2UTjzOW6dke1VB2rzOEQ'

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "C:/Users/nguye/Desktop/ảnh/1646113697285.jpg";
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const metadata = JSON.stringify({
      name: 'HungNN2', // name store on IPFS
    });
    formData.append('pinataMetadata', metadata);
    
    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      console.log(res.data);

      const metadata = JSON.stringify({
        name: 'HungNN2-metadata', // name store on IPFS
      });

      var CID = res.data.IpfsHash;
      var data = JSON.stringify({
        attributes:
        {
          age: 23
        },
        description: "1",   // type in FE
        image: `https://gateway.pinata.cloud/ipfs/${CID}`,
        name: "HungNN2"     // name of NFT asset, type in FE
      });

      var config = {
        method: 'post',
        url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': JWT
        },
        data : data
      };
      
      const metadataRes = await axios(config);
      
      console.log(metadataRes.data);

    } catch (error) {
      console.log(error);
    }
}

pinFileToIPFS()