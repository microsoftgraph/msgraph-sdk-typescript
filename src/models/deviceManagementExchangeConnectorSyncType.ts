/** The type of Exchange Connector sync requested. */
export enum DeviceManagementExchangeConnectorSyncType {
    /** Discover all the device in Exchange. */
    FullSync = "fullSync",
    /** Discover only the device in Exchange which have updated during the delta sync window. */
    DeltaSync = "deltaSync",
}
