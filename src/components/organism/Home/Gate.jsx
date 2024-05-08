import { Flex } from "@chakra-ui/react";
import { ElementHeader , ElementState , ElementBody } from './../../molecule/Home/index'
import { ForwardPageButton } from "../../molecule/Auth/index";
import {open_gate , close_gate} from './../../../assets/Images/index'
import { useState } from "react";

export function Gate()
{
    const [isOpen , setIsOpen] = useState(false);
    // QUERY FOR CHANGING STATE OF DEVICE
    return(
        <Flex  justifyContent={'center'} alignItems={'center'}>
            <Flex marginTop={'5%'} bg={'white'} width={{base : '90%', md : '70%' , lg : '50%'}} justifyContent={'center'} alignItems={'center'} flexDirection='column' borderRadius={20}>
                {/* START OF SENSOR BODY */}
                <ElementHeader text="Gate"/>
                <Flex alignItems={'center'} justifyContent={'center'} width={'100%'}>
                    <Flex flex='12' bg={'#E09FFF'} margin={5} borderRadius='10' flexDirection='column'>
                        <ElementState isOpen={isOpen} plusState="open" minusState="close" device="The Gate"/>
                        <ElementBody isOpen={isOpen} setIsOpen={setIsOpen} plusImage={open_gate} minusImage={close_gate} text="Click Here to close/open gate"/>
                        <Flex margin={5}>
                            <ForwardPageButton url='/homepage'/>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}