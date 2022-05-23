import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookWorksheetProtectionOptionsImpl implements AdditionalDataHolder, Parsable, WorkbookWorksheetProtectionOptions {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the worksheet protection option of allowing using auto filter feature. */
    public allowAutoFilter?: boolean | undefined;
    /** Represents the worksheet protection option of allowing deleting columns. */
    public allowDeleteColumns?: boolean | undefined;
    /** Represents the worksheet protection option of allowing deleting rows. */
    public allowDeleteRows?: boolean | undefined;
    /** Represents the worksheet protection option of allowing formatting cells. */
    public allowFormatCells?: boolean | undefined;
    /** Represents the worksheet protection option of allowing formatting columns. */
    public allowFormatColumns?: boolean | undefined;
    /** Represents the worksheet protection option of allowing formatting rows. */
    public allowFormatRows?: boolean | undefined;
    /** Represents the worksheet protection option of allowing inserting columns. */
    public allowInsertColumns?: boolean | undefined;
    /** Represents the worksheet protection option of allowing inserting hyperlinks. */
    public allowInsertHyperlinks?: boolean | undefined;
    /** Represents the worksheet protection option of allowing inserting rows. */
    public allowInsertRows?: boolean | undefined;
    /** Represents the worksheet protection option of allowing using pivot table feature. */
    public allowPivotTables?: boolean | undefined;
    /** Represents the worksheet protection option of allowing using sort feature. */
    public allowSort?: boolean | undefined;
    /**
     * Instantiates a new workbookWorksheetProtectionOptions and sets the default values.
     * @param workbookWorksheetProtectionOptionsParameterValue 
     */
    public constructor(workbookWorksheetProtectionOptionsParameterValue?: WorkbookWorksheetProtectionOptions | undefined) {
        this.additionalData = workbookWorksheetProtectionOptionsParameterValue?.additionalData ? workbookWorksheetProtectionOptionsParameterValue?.additionalData! : {}
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
        writer.writeBooleanValue("allowAutoFilter", this.allowAutoFilter);
        }
        if(this.allowDeleteColumns){
        writer.writeBooleanValue("allowDeleteColumns", this.allowDeleteColumns);
        }
        if(this.allowDeleteRows){
        writer.writeBooleanValue("allowDeleteRows", this.allowDeleteRows);
        }
        if(this.allowFormatCells){
        writer.writeBooleanValue("allowFormatCells", this.allowFormatCells);
        }
        if(this.allowFormatColumns){
        writer.writeBooleanValue("allowFormatColumns", this.allowFormatColumns);
        }
        if(this.allowFormatRows){
        writer.writeBooleanValue("allowFormatRows", this.allowFormatRows);
        }
        if(this.allowInsertColumns){
        writer.writeBooleanValue("allowInsertColumns", this.allowInsertColumns);
        }
        if(this.allowInsertHyperlinks){
        writer.writeBooleanValue("allowInsertHyperlinks", this.allowInsertHyperlinks);
        }
        if(this.allowInsertRows){
        writer.writeBooleanValue("allowInsertRows", this.allowInsertRows);
        }
        if(this.allowPivotTables){
        writer.writeBooleanValue("allowPivotTables", this.allowPivotTables);
        }
        if(this.allowSort){
        writer.writeBooleanValue("allowSort", this.allowSort);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
