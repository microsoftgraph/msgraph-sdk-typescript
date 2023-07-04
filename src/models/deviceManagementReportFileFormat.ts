/**
 * Possible values for the file format of a report
 */
export enum DeviceManagementReportFileFormat {
    /** CSV Format */
    Csv = "csv",
    /** PDF Format */
    Pdf = "pdf",
    /** JSON Format */
    Json = "json",
    /** Evolvable enumeration sentinel value. Do not use. */
    UnknownFutureValue = "unknownFutureValue",
}
