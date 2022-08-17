/** Provides operations to manage the admin singleton. */
export enum DataSourceScopes {
    None = "none",
    AllTenantMailboxes = "allTenantMailboxes",
    AllTenantSites = "allTenantSites",
    AllCaseCustodians = "allCaseCustodians",
    AllCaseNoncustodialDataSources = "allCaseNoncustodialDataSources",
    UnknownFutureValue = "unknownFutureValue",
}
