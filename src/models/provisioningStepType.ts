/** Provides operations to manage the collection of application entities. */
export enum ProvisioningStepType {
    Import_escaped = "import",
    Scoping = "scoping",
    Matching = "matching",
    Processing = "processing",
    ReferenceResolution = "referenceResolution",
    Export_escaped = "export",
    UnknownFutureValue = "unknownFutureValue",
}
