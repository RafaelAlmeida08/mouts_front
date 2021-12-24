import { Container, Data, ImageArea, LeftArea, Name, RightArea, Text, Top } from "./styles";
import Avatar from '@mui/material/Avatar';

export const Review = ({nome, data, review}) => {
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
                        <span>{nome}</span>
                    </Name>
                    <Data>
                        <span>{data}</span>
                    </Data>
                </RightArea>
            </Top>
            <Text>
                <span>{review}</span>
            </Text>
        </Container>
    );
}