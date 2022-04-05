/** Provides operations to manage the auditLogRoot singleton.  */
export enum ProvisioningStepType {
    Import_escaped = "import_escaped",
    Scoping = "scoping",
    Matching = "matching",
    Processing = "processing",
    ReferenceResolution = "referenceResolution",
    Export_escaped = "export_escaped",
    UnknownFutureValue = "unknownFutureValue",
}
