import React, { useContext, Fragment } from "react";

import { UserContext } from "./../../context/UserContext";

const OrdersDetails = () => {
    const { order } = useContext(UserContext);
    return (
        <Fragment>
            {(JSON.stringify(order))}
        </Fragment>
    );
};

export default OrdersDetails;
