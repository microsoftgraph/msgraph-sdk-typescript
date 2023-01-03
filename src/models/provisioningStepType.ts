/** Provides operations to manage the appCatalogs singleton. */
export enum ProvisioningStepType {
    Import_escaped = "import",
    Scoping = "scoping",
    Matching = "matching",
    Processing = "processing",
    ReferenceResolution = "referenceResolution",
    Export_escaped = "export",
    UnknownFutureValue = "unknownFutureValue",
}
