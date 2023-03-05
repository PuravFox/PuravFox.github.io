import { get, post } from "../../helper/apiManager";
import _ from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import MyMapComponent from "components/Map/GoogleMapsBasic";

const Location = () => {
  const [locationList, setlocationList] = useState([]);
  const [latestCoord, setlatestCoord] = useState({});

  const getLocationFromBrowser = (second) => {
    navigator.geolocation.getCurrentPosition(
      (showPosition) => {
        let _newCords = showPosition?.coords;
        // setlatestCoord(_newCords);
        setlatestCoord({
          latitude: _newCords?.latitude,
          longitude: _newCords.longitude,
        });
        _newCords.timestamp = new Date().toLocaleTimeString();

        let _newLocationList = [...locationList];
        _newLocationList = removeOldSlice(_newLocationList);
        _newLocationList.unshift(_newCords);

        setlocationList(_newLocationList);
      },
      (error) => {
        console.log("getCurrentPosition returned error", error);
      }
    );
  };

  //record data for every 5 seconds
  setTimeout(getLocationFromBrowser, 10000);

  const removeOldSlice = (newLocationList) => {
    if (newLocationList.length > 5) {
      newLocationList.pop();
      return newLocationList;
    } else {
      return newLocationList;
    }
  };

  const MemoMap = useCallback(() => {
    return (
      <MyMapComponent
        long={latestCoord?.longitude}
        lat={latestCoord?.latitude}
      />
    );
  }, [latestCoord]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Location from Google API</Card.Title>
                <p className="card-category">
                  Fetch data from google api and list down
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Timestamp</th>
                      <th className="border-0">Latitude</th>
                      <th className="border-0">Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                    {_.map(locationList, (_loc, index) => (
                      <tr key={index}>
                        <td>{_loc?.timestamp}</td>
                        <td>{_loc?.latitude}</td>
                        <td>{_loc?.longitude}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                {/* <MyMapComponent
                  long={locationList[0]?.longitude}
                  lat={locationList[0]?.latitude}
                /> */}
                <MemoMap />
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Location;
