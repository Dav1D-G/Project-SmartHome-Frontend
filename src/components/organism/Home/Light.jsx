import { Flex } from "@chakra-ui/react";
import { ElementHeader , ElementState , ElementBody } from './../../molecule/Home/index'
import { ForwardPageButton } from "../../molecule/Auth/index";
import { useState } from "react";
import {light_off , light_on} from './../../../assets/Images/index'

export function Light()
{
    const [isOpen , setIsOpen] = useState(false);
    // QUERY FOR CHANGING STATE OF DEVICE
    return(
        <Flex  justifyContent={'center'} alignItems={'center'}>
            <Flex marginTop={'5%'} bg={'white'} width={{base : '90%', md : '70%' , lg : '50%'}} justifyContent={'center'} alignItems={'center'} flexDirection='column' borderRadius={20}>
                {/* START OF SENSOR BODY */}
                <ElementHeader text="Light"/>
                <Flex alignItems={'center'} justifyContent={'center'} width={'100%'}>
                    <Flex flex='12' bg={'#E09FFF'} margin={5} borderRadius='10' flexDirection='column'>
                        <ElementState isOpen={isOpen} plusState="on" minusState="off" device="Turn"/>
                        <ElementBody isOpen={isOpen} setIsOpen={setIsOpen} plusImage={light_on} minusImage={light_off} text="Click Here turn on / off the light"/>
                        <Flex margin={5}>
                            <ForwardPageButton url='/homepage'/>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}