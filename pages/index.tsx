// node modules
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';

// components
import { Grid } from '@/components/Common/GridContainer';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <Grid>
    <Row>
      <Col lg={7}>
        <Title>My page</Title>
      </Col>
    </Row>
  </Grid>
);
