import { Box , Text , FormControl , FormLabel , Input ,  Image,  Spacer , Center} from '@chakra-ui/react';
import PropTypes from 'prop-types'

export function InputForm({image , text})
{
    return(
        <FormControl marginTop={30}>
            <FormLabel  width={'40%'}>
                <Center>
                    <Text  width={200} fontSize={{base : '12px' , md : '14px' , lg : '16px'}} color={'gray.500'} className='dm-sans' fontWeight={400}>{text}</Text>
                </Center>
            </FormLabel>
            <Box display={'flex'} justifyContent={{base : 'start', md : 'center' , lg :'center'}} alignItems={'center'}>
                <Box width={{base : '10%'}}  display={'flex'} justifyContent={{base : 'center' , md : 'end'}} alignItems={'center'} >
                    <Image src={`${image}`} marginRight={{base : 0 , md : 5}} width={{base: 7 , md : 8 }} height={{base: 7 , md : 8 , lg : 10}}/>
                </Box>
                <Box width={{base : '80%' , md : '70%'}} display={'flex'} justifyContent={{base : 'center', md:'start'}} >
                    <Input 
                        type='email'  
                        size={{base : 'sm', md : 'md' , lg : 'md'}} 
                        width={{base : '90%', md: '80%' , lg : '70%'}} 
                        variant='flushed'
                        borderColor={'gray.500'}
                        focusBorderColor='blue.300'
                        />
                </Box>
                <Spacer flex={{base : 1 }} display={{md : 'none'}}/>
            </Box>
        </FormControl>
    )
}

InputForm.propTypes = {
    image : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
}
