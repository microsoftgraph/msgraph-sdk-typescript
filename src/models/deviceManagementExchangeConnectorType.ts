/** Provides operations to manage the deviceManagement singleton. */
export enum DeviceManagementExchangeConnectorType {
    /** Connects to on-premises Exchange Environment. */
    OnPremises = "onPremises",
    /** Connects to O365 multi-tenant Exchange environment */
    Hosted = "hosted",
    /** Intune Service connects directly to O365 multi-tenant Exchange environment */
    ServiceToService = "serviceToService",
    /** Connects to O365 Dedicated Exchange environment. */
    Dedicated = "dedicated",
}
