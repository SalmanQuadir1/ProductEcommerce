import React from 'react'

const PreviewImage = ({ files }) => {
    console.log("PROP RECIEVED...", files);
    const filess = Array.from(files);
    return (
        <>
            {
                filess.map((file) => {


                    return (

                        <>


                            <img id="output" className='m-2 border border-dark' key={file.id} alt="" src={URL.createObjectURL(file)} width="90px" height="90px" />





                        </>



                    )
                })

            }
        </>
    )

}

export default PreviewImage
