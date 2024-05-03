import { Flex , Text , Button , Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {arrow_right} from './../../../assets/Images/index'
import PropTypes from 'prop-types'

export function ForwardPageButton({url})
{
    return(
        <Link to={url} style={{width : '100%' , display : 'flex' , justifyContent : 'center', textDecoration : 'none'}}>
            <Button colorScheme='whatsapp' width={{base : '60%', md : '50%' , lg : '40%'}} height={50}>
                <Flex justifyContent={'space-around'} width={'100%'}>
                    <Flex>
                        <Text>Go to home page</Text>
                    </Flex>
                    <Flex>
                        <Image src={`${arrow_right}`}/>
                    </Flex>
                </Flex>
            </Button>
        </Link>
    )
}


ForwardPageButton.propTypes = {
    url : PropTypes.string.isRequired
}