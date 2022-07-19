/** Provides operations to manage the admin singleton. */
export enum DeviceManagementExchangeConnectorStatus {
    /** No Connector exists. */
    None = "none",
    /** Pending Connection to the Exchange Environment. */
    ConnectionPending = "connectionPending",
    /** Connected to the Exchange Environment */
    Connected = "connected",
    /** Disconnected from the Exchange Environment */
    Disconnected = "disconnected",
}
