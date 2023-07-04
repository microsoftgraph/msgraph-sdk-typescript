/**
 * The current status of the Exchange Connector.
 */
export enum DeviceManagementExchangeConnectorStatus {
    /** No Connector exists. */
    None = "none",
    /** Pending Connection to the Exchange Environment. */
    ConnectionPending = "connectionPending",
    /** Connected to the Exchange Environment */
    Connected = "connected",
    /** Disconnected from the Exchange Environment */
    Disconnected = "disconnected",
    /** Evolvable enumeration sentinel value. Do not use. */
    UnknownFutureValue = "unknownFutureValue",
}
