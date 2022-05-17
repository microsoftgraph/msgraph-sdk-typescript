import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookWorksheetProtectionOptionsImpl implements AdditionalDataHolder, Parsable, WorkbookWorksheetProtectionOptions {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** Represents the worksheet protection option of allowing using auto filter feature. */
    allowAutoFilter?: boolean | undefined;
    /** Represents the worksheet protection option of allowing deleting columns. */
    allowDeleteColumns?: boolean | undefined;
    /** Represents the worksheet protection option of allowing deleting rows. */
    allowDeleteRows?: boolean | undefined;
    /** Represents the worksheet protection option of allowing formatting cells. */
    allowFormatCells?: boolean | undefined;
    /** Represents the worksheet protection option of allowing formatting columns. */
    allowFormatColumns?: boolean | undefined;
    /** Represents the worksheet protection option of allowing formatting rows. */
    allowFormatRows?: boolean | undefined;
    /** Represents the worksheet protection option of allowing inserting columns. */
    allowInsertColumns?: boolean | undefined;
    /** Represents the worksheet protection option of allowing inserting hyperlinks. */
    allowInsertHyperlinks?: boolean | undefined;
    /** Represents the worksheet protection option of allowing inserting rows. */
    allowInsertRows?: boolean | undefined;
    /** Represents the worksheet protection option of allowing using pivot table feature. */
    allowPivotTables?: boolean | undefined;
    /** Represents the worksheet protection option of allowing using sort feature. */
    allowSort?: boolean | undefined;
    /**
     * Instantiates a new workbookWorksheetProtectionOptions and sets the default values.
     * @param workbookWorksheetProtectionOptionsParameterValue 
     */
    public constructor(workbookWorksheetProtectionOptionsParameterValue?: WorkbookWorksheetProtectionOptions | undefined) {
        this.additionalData = {};
        this.additionalData = workbookWorksheetProtectionOptionsParameterValue?.additionalData ? {} : workbookWorksheetProtectionOptionsParameterValue?.additionalData!
        this.allowAutoFilter = workbookWorksheetProtectionOptionsParameterValue?.allowAutoFilter ;
        this.allowDeleteColumns = workbookWorksheetProtectionOptionsParameterValue?.allowDeleteColumns ;
        this.allowDeleteRows = workbookWorksheetProtectionOptionsParameterValue?.allowDeleteRows ;
        this.allowFormatCells = workbookWorksheetProtectionOptionsParameterValue?.allowFormatCells ;
        this.allowFormatColumns = workbookWorksheetProtectionOptionsParameterValue?.allowFormatColumns ;
        this.allowFormatRows = workbookWorksheetProtectionOptionsParameterValue?.allowFormatRows ;
        this.allowInsertColumns = workbookWorksheetProtectionOptionsParameterValue?.allowInsertColumns ;
        this.allowInsertHyperlinks = workbookWorksheetProtectionOptionsParameterValue?.allowInsertHyperlinks ;
        this.allowInsertRows = workbookWorksheetProtectionOptionsParameterValue?.allowInsertRows ;
        this.allowPivotTables = workbookWorksheetProtectionOptionsParameterValue?.allowPivotTables ;
        this.allowSort = workbookWorksheetProtectionOptionsParameterValue?.allowSort ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowAutoFilter": n => { this.allowAutoFilter = n.getBooleanValue(); },
            "allowDeleteColumns": n => { this.allowDeleteColumns = n.getBooleanValue(); },
            "allowDeleteRows": n => { this.allowDeleteRows = n.getBooleanValue(); },
            "allowFormatCells": n => { this.allowFormatCells = n.getBooleanValue(); },
            "allowFormatColumns": n => { this.allowFormatColumns = n.getBooleanValue(); },
            "allowFormatRows": n => { this.allowFormatRows = n.getBooleanValue(); },
            "allowInsertColumns": n => { this.allowInsertColumns = n.getBooleanValue(); },
            "allowInsertHyperlinks": n => { this.allowInsertHyperlinks = n.getBooleanValue(); },
            "allowInsertRows": n => { this.allowInsertRows = n.getBooleanValue(); },
            "allowPivotTables": n => { this.allowPivotTables = n.getBooleanValue(); },
            "allowSort": n => { this.allowSort = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowAutoFilter){
        if(this.allowAutoFilter)
        writer.writeBooleanValue("allowAutoFilter", this.allowAutoFilter);
        }
        if(this.allowDeleteColumns){
        if(this.allowDeleteColumns)
        writer.writeBooleanValue("allowDeleteColumns", this.allowDeleteColumns);
        }
        if(this.allowDeleteRows){
        if(this.allowDeleteRows)
        writer.writeBooleanValue("allowDeleteRows", this.allowDeleteRows);
        }
        if(this.allowFormatCells){
        if(this.allowFormatCells)
        writer.writeBooleanValue("allowFormatCells", this.allowFormatCells);
        }
        if(this.allowFormatColumns){
        if(this.allowFormatColumns)
        writer.writeBooleanValue("allowFormatColumns", this.allowFormatColumns);
        }
        if(this.allowFormatRows){
        if(this.allowFormatRows)
        writer.writeBooleanValue("allowFormatRows", this.allowFormatRows);
        }
        if(this.allowInsertColumns){
        if(this.allowInsertColumns)
        writer.writeBooleanValue("allowInsertColumns", this.allowInsertColumns);
        }
        if(this.allowInsertHyperlinks){
        if(this.allowInsertHyperlinks)
        writer.writeBooleanValue("allowInsertHyperlinks", this.allowInsertHyperlinks);
        }
        if(this.allowInsertRows){
        if(this.allowInsertRows)
        writer.writeBooleanValue("allowInsertRows", this.allowInsertRows);
        }
        if(this.allowPivotTables){
        if(this.allowPivotTables)
        writer.writeBooleanValue("allowPivotTables", this.allowPivotTables);
        }
        if(this.allowSort){
        if(this.allowSort)
        writer.writeBooleanValue("allowSort", this.allowSort);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
