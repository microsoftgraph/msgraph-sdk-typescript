import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheetProtectionOptions extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Represents the worksheet protection option of allowing using auto filter feature.
     */
    allowAutoFilter?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing deleting columns.
     */
    allowDeleteColumns?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing deleting rows.
     */
    allowDeleteRows?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing formatting cells.
     */
    allowFormatCells?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing formatting columns.
     */
    allowFormatColumns?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing formatting rows.
     */
    allowFormatRows?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing inserting columns.
     */
    allowInsertColumns?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing inserting hyperlinks.
     */
    allowInsertHyperlinks?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing inserting rows.
     */
    allowInsertRows?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing using pivot table feature.
     */
    allowPivotTables?: boolean | undefined;
    /**
     * Represents the worksheet protection option of allowing using sort feature.
     */
    allowSort?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
