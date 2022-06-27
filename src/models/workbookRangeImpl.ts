import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookRangeFormatFromDiscriminatorValue} from './createWorkbookRangeFormatFromDiscriminatorValue';
import {createWorkbookRangeSortFromDiscriminatorValue} from './createWorkbookRangeSortFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {EntityImpl, JsonImpl, WorkbookRangeFormatImpl, WorkbookRangeSortImpl, WorkbookWorksheetImpl} from './index';
import {Json} from './json';
import {WorkbookRange} from './workbookRange';
import {WorkbookRangeFormat} from './workbookRangeFormat';
import {WorkbookRangeSort} from './workbookRangeSort';
import {WorkbookWorksheet} from './workbookWorksheet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookRangeImpl extends EntityImpl implements WorkbookRange {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only. */
    public address?: string | undefined;
    /** Represents range reference for the specified range in the language of the user. Read-only. */
    public addressLocal?: string | undefined;
    /** Number of cells in the range. Read-only. */
    public cellCount?: number | undefined;
    /** Represents the total number of columns in the range. Read-only. */
    public columnCount?: number | undefined;
    /** Represents if all columns of the current range are hidden. */
    public columnHidden?: boolean | undefined;
    /** Represents the column number of the first cell in the range. Zero-indexed. Read-only. */
    public columnIndex?: number | undefined;
    /** Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only. */
    public format?: WorkbookRangeFormat | undefined;
    /** Represents the formula in A1-style notation. */
    public formulas?: Json | undefined;
    /** Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German. */
    public formulasLocal?: Json | undefined;
    /** Represents the formula in R1C1-style notation. */
    public formulasR1C1?: Json | undefined;
    /** Represents if all cells of the current range are hidden. Read-only. */
    public hidden?: boolean | undefined;
    /** Represents Excel's number format code for the given cell. */
    public numberFormat?: Json | undefined;
    /** Returns the total number of rows in the range. Read-only. */
    public rowCount?: number | undefined;
    /** Represents if all rows of the current range are hidden. */
    public rowHidden?: boolean | undefined;
    /** Returns the row number of the first cell in the range. Zero-indexed. Read-only. */
    public rowIndex?: number | undefined;
    /** The worksheet containing the current range. Read-only. */
    public sort?: WorkbookRangeSort | undefined;
    /** Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only. */
    public text?: Json | undefined;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    public values?: Json | undefined;
    /** Represents the type of data of each cell. Possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. Read-only. */
    public valueTypes?: Json | undefined;
    /** The worksheet containing the current range. Read-only. */
    public worksheet?: WorkbookWorksheet | undefined;
    /**
     * Instantiates a new WorkbookRange and sets the default values.
     * @param workbookRangeParameterValue 
     */
    public constructor(workbookRangeParameterValue?: WorkbookRange | undefined) {
        super(workbookRangeParameterValue);
        this.additionalData = workbookRangeParameterValue?.additionalData ? workbookRangeParameterValue?.additionalData! : {};
        this.address = workbookRangeParameterValue?.address;
        this.addressLocal = workbookRangeParameterValue?.addressLocal;
        this.cellCount = workbookRangeParameterValue?.cellCount;
        this.columnCount = workbookRangeParameterValue?.columnCount;
        this.columnHidden = workbookRangeParameterValue?.columnHidden;
        this.columnIndex = workbookRangeParameterValue?.columnIndex;
        this.format = workbookRangeParameterValue?.format instanceof WorkbookRangeFormatImpl? workbookRangeParameterValue?.format:new WorkbookRangeFormatImpl(workbookRangeParameterValue?.format);
        this.formulas = workbookRangeParameterValue?.formulas instanceof JsonImpl? workbookRangeParameterValue?.formulas:new JsonImpl(workbookRangeParameterValue?.formulas);
        this.formulasLocal = workbookRangeParameterValue?.formulasLocal instanceof JsonImpl? workbookRangeParameterValue?.formulasLocal:new JsonImpl(workbookRangeParameterValue?.formulasLocal);
        this.formulasR1C1 = workbookRangeParameterValue?.formulasR1C1 instanceof JsonImpl? workbookRangeParameterValue?.formulasR1C1:new JsonImpl(workbookRangeParameterValue?.formulasR1C1);
        this.hidden = workbookRangeParameterValue?.hidden;
        this.numberFormat = workbookRangeParameterValue?.numberFormat instanceof JsonImpl? workbookRangeParameterValue?.numberFormat:new JsonImpl(workbookRangeParameterValue?.numberFormat);
        this.rowCount = workbookRangeParameterValue?.rowCount;
        this.rowHidden = workbookRangeParameterValue?.rowHidden;
        this.rowIndex = workbookRangeParameterValue?.rowIndex;
        this.sort = workbookRangeParameterValue?.sort instanceof WorkbookRangeSortImpl? workbookRangeParameterValue?.sort:new WorkbookRangeSortImpl(workbookRangeParameterValue?.sort);
        this.text = workbookRangeParameterValue?.text instanceof JsonImpl? workbookRangeParameterValue?.text:new JsonImpl(workbookRangeParameterValue?.text);
        this.values = workbookRangeParameterValue?.values instanceof JsonImpl? workbookRangeParameterValue?.values:new JsonImpl(workbookRangeParameterValue?.values);
        this.valueTypes = workbookRangeParameterValue?.valueTypes instanceof JsonImpl? workbookRangeParameterValue?.valueTypes:new JsonImpl(workbookRangeParameterValue?.valueTypes);
        this.worksheet = workbookRangeParameterValue?.worksheet instanceof WorkbookWorksheetImpl? workbookRangeParameterValue?.worksheet:new WorkbookWorksheetImpl(workbookRangeParameterValue?.worksheet);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "address": n => { this.address = n.getStringValue(); },
            "addressLocal": n => { this.addressLocal = n.getStringValue(); },
            "cellCount": n => { this.cellCount = n.getNumberValue(); },
            "columnCount": n => { this.columnCount = n.getNumberValue(); },
            "columnHidden": n => { this.columnHidden = n.getBooleanValue(); },
            "columnIndex": n => { this.columnIndex = n.getNumberValue(); },
            "format": n => { this.format = n.getObjectValue<WorkbookRangeFormatImpl>(createWorkbookRangeFormatFromDiscriminatorValue); },
            "formulas": n => { this.formulas = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "formulasLocal": n => { this.formulasLocal = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "formulasR1C1": n => { this.formulasR1C1 = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "hidden": n => { this.hidden = n.getBooleanValue(); },
            "numberFormat": n => { this.numberFormat = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "rowCount": n => { this.rowCount = n.getNumberValue(); },
            "rowHidden": n => { this.rowHidden = n.getBooleanValue(); },
            "rowIndex": n => { this.rowIndex = n.getNumberValue(); },
            "sort": n => { this.sort = n.getObjectValue<WorkbookRangeSortImpl>(createWorkbookRangeSortFromDiscriminatorValue); },
            "text": n => { this.text = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "values": n => { this.values = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "valueTypes": n => { this.valueTypes = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "worksheet": n => { this.worksheet = n.getObjectValue<WorkbookWorksheetImpl>(createWorkbookWorksheetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.address){
            writer.writeStringValue("address", this.address);
        }
        if(this.addressLocal){
            writer.writeStringValue("addressLocal", this.addressLocal);
        }
        if(this.cellCount){
            writer.writeNumberValue("cellCount", this.cellCount);
        }
        if(this.columnCount){
            writer.writeNumberValue("columnCount", this.columnCount);
        }
        if(this.columnHidden){
            writer.writeBooleanValue("columnHidden", this.columnHidden);
        }
        if(this.columnIndex){
            writer.writeNumberValue("columnIndex", this.columnIndex);
        }
        if(this.format){
            writer.writeObjectValue<WorkbookRangeFormatImpl>("format", new WorkbookRangeFormatImpl(this.format));
        }
        if(this.formulas){
            writer.writeObjectValue<JsonImpl>("formulas", new JsonImpl(this.formulas));
        }
        if(this.formulasLocal){
            writer.writeObjectValue<JsonImpl>("formulasLocal", new JsonImpl(this.formulasLocal));
        }
        if(this.formulasR1C1){
            writer.writeObjectValue<JsonImpl>("formulasR1C1", new JsonImpl(this.formulasR1C1));
        }
        if(this.hidden){
            writer.writeBooleanValue("hidden", this.hidden);
        }
        if(this.numberFormat){
            writer.writeObjectValue<JsonImpl>("numberFormat", new JsonImpl(this.numberFormat));
        }
        if(this.rowCount){
            writer.writeNumberValue("rowCount", this.rowCount);
        }
        if(this.rowHidden){
            writer.writeBooleanValue("rowHidden", this.rowHidden);
        }
        if(this.rowIndex){
            writer.writeNumberValue("rowIndex", this.rowIndex);
        }
        if(this.sort){
            writer.writeObjectValue<WorkbookRangeSortImpl>("sort", new WorkbookRangeSortImpl(this.sort));
        }
        if(this.text){
            writer.writeObjectValue<JsonImpl>("text", new JsonImpl(this.text));
        }
        if(this.values){
            writer.writeObjectValue<JsonImpl>("values", new JsonImpl(this.values));
        }
        if(this.valueTypes){
            writer.writeObjectValue<JsonImpl>("valueTypes", new JsonImpl(this.valueTypes));
        }
        if(this.worksheet){
            writer.writeObjectValue<WorkbookWorksheetImpl>("worksheet", new WorkbookWorksheetImpl(this.worksheet));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
