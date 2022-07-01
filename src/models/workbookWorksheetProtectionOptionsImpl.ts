import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookWorksheetProtectionOptionsImpl implements WorkbookWorksheetProtectionOptions {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Represents the worksheet protection option of allowing using auto filter feature. */
    private _allowAutoFilter?: boolean | undefined;
    /** Represents the worksheet protection option of allowing deleting columns. */
    private _allowDeleteColumns?: boolean | undefined;
    /** Represents the worksheet protection option of allowing deleting rows. */
    private _allowDeleteRows?: boolean | undefined;
    /** Represents the worksheet protection option of allowing formatting cells. */
    private _allowFormatCells?: boolean | undefined;
    /** Represents the worksheet protection option of allowing formatting columns. */
    private _allowFormatColumns?: boolean | undefined;
    /** Represents the worksheet protection option of allowing formatting rows. */
    private _allowFormatRows?: boolean | undefined;
    /** Represents the worksheet protection option of allowing inserting columns. */
    private _allowInsertColumns?: boolean | undefined;
    /** Represents the worksheet protection option of allowing inserting hyperlinks. */
    private _allowInsertHyperlinks?: boolean | undefined;
    /** Represents the worksheet protection option of allowing inserting rows. */
    private _allowInsertRows?: boolean | undefined;
    /** Represents the worksheet protection option of allowing using pivot table feature. */
    private _allowPivotTables?: boolean | undefined;
    /** Represents the worksheet protection option of allowing using sort feature. */
    private _allowSort?: boolean | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the allowAutoFilter property value. Represents the worksheet protection option of allowing using auto filter feature.
     * @returns a boolean
     */
    public get allowAutoFilter() {
        return this._allowAutoFilter;
    };
    /**
     * Sets the allowAutoFilter property value. Represents the worksheet protection option of allowing using auto filter feature.
     * @param value Value to set for the allowAutoFilter property.
     */
    public set allowAutoFilter(value: boolean | undefined) {
        if(value) {
            this._allowAutoFilter = value;
        }
    };
    /**
     * Gets the allowDeleteColumns property value. Represents the worksheet protection option of allowing deleting columns.
     * @returns a boolean
     */
    public get allowDeleteColumns() {
        return this._allowDeleteColumns;
    };
    /**
     * Sets the allowDeleteColumns property value. Represents the worksheet protection option of allowing deleting columns.
     * @param value Value to set for the allowDeleteColumns property.
     */
    public set allowDeleteColumns(value: boolean | undefined) {
        if(value) {
            this._allowDeleteColumns = value;
        }
    };
    /**
     * Gets the allowDeleteRows property value. Represents the worksheet protection option of allowing deleting rows.
     * @returns a boolean
     */
    public get allowDeleteRows() {
        return this._allowDeleteRows;
    };
    /**
     * Sets the allowDeleteRows property value. Represents the worksheet protection option of allowing deleting rows.
     * @param value Value to set for the allowDeleteRows property.
     */
    public set allowDeleteRows(value: boolean | undefined) {
        if(value) {
            this._allowDeleteRows = value;
        }
    };
    /**
     * Gets the allowFormatCells property value. Represents the worksheet protection option of allowing formatting cells.
     * @returns a boolean
     */
    public get allowFormatCells() {
        return this._allowFormatCells;
    };
    /**
     * Sets the allowFormatCells property value. Represents the worksheet protection option of allowing formatting cells.
     * @param value Value to set for the allowFormatCells property.
     */
    public set allowFormatCells(value: boolean | undefined) {
        if(value) {
            this._allowFormatCells = value;
        }
    };
    /**
     * Gets the allowFormatColumns property value. Represents the worksheet protection option of allowing formatting columns.
     * @returns a boolean
     */
    public get allowFormatColumns() {
        return this._allowFormatColumns;
    };
    /**
     * Sets the allowFormatColumns property value. Represents the worksheet protection option of allowing formatting columns.
     * @param value Value to set for the allowFormatColumns property.
     */
    public set allowFormatColumns(value: boolean | undefined) {
        if(value) {
            this._allowFormatColumns = value;
        }
    };
    /**
     * Gets the allowFormatRows property value. Represents the worksheet protection option of allowing formatting rows.
     * @returns a boolean
     */
    public get allowFormatRows() {
        return this._allowFormatRows;
    };
    /**
     * Sets the allowFormatRows property value. Represents the worksheet protection option of allowing formatting rows.
     * @param value Value to set for the allowFormatRows property.
     */
    public set allowFormatRows(value: boolean | undefined) {
        if(value) {
            this._allowFormatRows = value;
        }
    };
    /**
     * Gets the allowInsertColumns property value. Represents the worksheet protection option of allowing inserting columns.
     * @returns a boolean
     */
    public get allowInsertColumns() {
        return this._allowInsertColumns;
    };
    /**
     * Sets the allowInsertColumns property value. Represents the worksheet protection option of allowing inserting columns.
     * @param value Value to set for the allowInsertColumns property.
     */
    public set allowInsertColumns(value: boolean | undefined) {
        if(value) {
            this._allowInsertColumns = value;
        }
    };
    /**
     * Gets the allowInsertHyperlinks property value. Represents the worksheet protection option of allowing inserting hyperlinks.
     * @returns a boolean
     */
    public get allowInsertHyperlinks() {
        return this._allowInsertHyperlinks;
    };
    /**
     * Sets the allowInsertHyperlinks property value. Represents the worksheet protection option of allowing inserting hyperlinks.
     * @param value Value to set for the allowInsertHyperlinks property.
     */
    public set allowInsertHyperlinks(value: boolean | undefined) {
        if(value) {
            this._allowInsertHyperlinks = value;
        }
    };
    /**
     * Gets the allowInsertRows property value. Represents the worksheet protection option of allowing inserting rows.
     * @returns a boolean
     */
    public get allowInsertRows() {
        return this._allowInsertRows;
    };
    /**
     * Sets the allowInsertRows property value. Represents the worksheet protection option of allowing inserting rows.
     * @param value Value to set for the allowInsertRows property.
     */
    public set allowInsertRows(value: boolean | undefined) {
        if(value) {
            this._allowInsertRows = value;
        }
    };
    /**
     * Gets the allowPivotTables property value. Represents the worksheet protection option of allowing using pivot table feature.
     * @returns a boolean
     */
    public get allowPivotTables() {
        return this._allowPivotTables;
    };
    /**
     * Sets the allowPivotTables property value. Represents the worksheet protection option of allowing using pivot table feature.
     * @param value Value to set for the allowPivotTables property.
     */
    public set allowPivotTables(value: boolean | undefined) {
        if(value) {
            this._allowPivotTables = value;
        }
    };
    /**
     * Gets the allowSort property value. Represents the worksheet protection option of allowing using sort feature.
     * @returns a boolean
     */
    public get allowSort() {
        return this._allowSort;
    };
    /**
     * Sets the allowSort property value. Represents the worksheet protection option of allowing using sort feature.
     * @param value Value to set for the allowSort property.
     */
    public set allowSort(value: boolean | undefined) {
        if(value) {
            this._allowSort = value;
        }
    };
    /**
     * Instantiates a new workbookWorksheetProtectionOptions and sets the default values.
     * @param workbookWorksheetProtectionOptionsParameterValue 
     */
    public constructor(workbookWorksheetProtectionOptionsParameterValue?: WorkbookWorksheetProtectionOptions | undefined) {
        this._additionalData = workbookWorksheetProtectionOptionsParameterValue?.additionalData ? workbookWorksheetProtectionOptionsParameterValue?.additionalData! : {};
        this._allowAutoFilter = workbookWorksheetProtectionOptionsParameterValue?.allowAutoFilter;
        this._allowDeleteColumns = workbookWorksheetProtectionOptionsParameterValue?.allowDeleteColumns;
        this._allowDeleteRows = workbookWorksheetProtectionOptionsParameterValue?.allowDeleteRows;
        this._allowFormatCells = workbookWorksheetProtectionOptionsParameterValue?.allowFormatCells;
        this._allowFormatColumns = workbookWorksheetProtectionOptionsParameterValue?.allowFormatColumns;
        this._allowFormatRows = workbookWorksheetProtectionOptionsParameterValue?.allowFormatRows;
        this._allowInsertColumns = workbookWorksheetProtectionOptionsParameterValue?.allowInsertColumns;
        this._allowInsertHyperlinks = workbookWorksheetProtectionOptionsParameterValue?.allowInsertHyperlinks;
        this._allowInsertRows = workbookWorksheetProtectionOptionsParameterValue?.allowInsertRows;
        this._allowPivotTables = workbookWorksheetProtectionOptionsParameterValue?.allowPivotTables;
        this._allowSort = workbookWorksheetProtectionOptionsParameterValue?.allowSort;
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
