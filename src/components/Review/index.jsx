import { Container, Data, ImageArea, LeftArea, Name, RightArea, Text, Top } from "./styles";
import Avatar from '@mui/material/Avatar';

export const Review = () => {
    return(
        <Container>
            <Top>
                <LeftArea>
                    <ImageArea>
                        <Avatar sx={{ width: 56, height: 56 }} >H</Avatar>
                    </ImageArea>
                </LeftArea>
                <RightArea>
                    <Name>
                        <span>joão da silva</span>
                    </Name>
                    <Data>
                        <span>23/02/2020</span>
                    </Data>
                </RightArea>
            </Top>
            <Text>
                <span>ótimi lugar asdasasd</span>
            </Text>
        </Container>
    );
}