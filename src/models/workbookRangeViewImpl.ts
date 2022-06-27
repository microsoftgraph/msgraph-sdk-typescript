import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookRangeViewFromDiscriminatorValue} from './createWorkbookRangeViewFromDiscriminatorValue';
import {EntityImpl, JsonImpl} from './index';
import {Json} from './json';
import {WorkbookRangeView} from './workbookRangeView';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookRangeViewImpl extends EntityImpl implements WorkbookRangeView {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the cell addresses */
    public cellAddresses?: Json | undefined;
    /** Returns the number of visible columns. Read-only. */
    public columnCount?: number | undefined;
    /** Represents the formula in A1-style notation. */
    public formulas?: Json | undefined;
    /** Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German. */
    public formulasLocal?: Json | undefined;
    /** Represents the formula in R1C1-style notation. */
    public formulasR1C1?: Json | undefined;
    /** Index of the range. */
    public index?: number | undefined;
    /** Represents Excel's number format code for the given cell. Read-only. */
    public numberFormat?: Json | undefined;
    /** Returns the number of visible rows. Read-only. */
    public rowCount?: number | undefined;
    /** Represents a collection of range views associated with the range. Read-only. Read-only. */
    public rows?: WorkbookRangeView[] | undefined;
    /** Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only. */
    public text?: Json | undefined;
    /** Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    public values?: Json | undefined;
    /** Represents the type of data of each cell. Read-only. Possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. */
    public valueTypes?: Json | undefined;
    /**
     * Instantiates a new WorkbookRangeView and sets the default values.
     * @param workbookRangeViewParameterValue 
     */
    public constructor(workbookRangeViewParameterValue?: WorkbookRangeView | undefined) {
        super(workbookRangeViewParameterValue);
        this.additionalData = workbookRangeViewParameterValue?.additionalData ? workbookRangeViewParameterValue?.additionalData! : {};
        this.cellAddresses = workbookRangeViewParameterValue?.cellAddresses instanceof JsonImpl? workbookRangeViewParameterValue?.cellAddresses:new JsonImpl(workbookRangeViewParameterValue?.cellAddresses);
        this.columnCount = workbookRangeViewParameterValue?.columnCount;
        this.formulas = workbookRangeViewParameterValue?.formulas instanceof JsonImpl? workbookRangeViewParameterValue?.formulas:new JsonImpl(workbookRangeViewParameterValue?.formulas);
        this.formulasLocal = workbookRangeViewParameterValue?.formulasLocal instanceof JsonImpl? workbookRangeViewParameterValue?.formulasLocal:new JsonImpl(workbookRangeViewParameterValue?.formulasLocal);
        this.formulasR1C1 = workbookRangeViewParameterValue?.formulasR1C1 instanceof JsonImpl? workbookRangeViewParameterValue?.formulasR1C1:new JsonImpl(workbookRangeViewParameterValue?.formulasR1C1);
        this.index = workbookRangeViewParameterValue?.index;
        this.numberFormat = workbookRangeViewParameterValue?.numberFormat instanceof JsonImpl? workbookRangeViewParameterValue?.numberFormat:new JsonImpl(workbookRangeViewParameterValue?.numberFormat);
        this.rowCount = workbookRangeViewParameterValue?.rowCount;
        const rowsArrValue: WorkbookRangeViewImpl[] = []; workbookRangeViewParameterValue.rows?.forEach(element => {rowsArrValue.push(element instanceof WorkbookRangeViewImpl? element : new WorkbookRangeViewImpl(element));});
        this.rows = rowsArrValue;
        this.text = workbookRangeViewParameterValue?.text instanceof JsonImpl? workbookRangeViewParameterValue?.text:new JsonImpl(workbookRangeViewParameterValue?.text);
        this.values = workbookRangeViewParameterValue?.values instanceof JsonImpl? workbookRangeViewParameterValue?.values:new JsonImpl(workbookRangeViewParameterValue?.values);
        this.valueTypes = workbookRangeViewParameterValue?.valueTypes instanceof JsonImpl? workbookRangeViewParameterValue?.valueTypes:new JsonImpl(workbookRangeViewParameterValue?.valueTypes);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "cellAddresses": n => { this.cellAddresses = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "columnCount": n => { this.columnCount = n.getNumberValue(); },
            "formulas": n => { this.formulas = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "formulasLocal": n => { this.formulasLocal = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "formulasR1C1": n => { this.formulasR1C1 = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "index": n => { this.index = n.getNumberValue(); },
            "numberFormat": n => { this.numberFormat = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "rowCount": n => { this.rowCount = n.getNumberValue(); },
            "rows": n => { this.rows = n.getCollectionOfObjectValues<WorkbookRangeViewImpl>(createWorkbookRangeViewFromDiscriminatorValue); },
            "text": n => { this.text = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "values": n => { this.values = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "valueTypes": n => { this.valueTypes = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.cellAddresses){
            writer.writeObjectValue<JsonImpl>("cellAddresses", new JsonImpl(this.cellAddresses));
        }
        if(this.columnCount){
            writer.writeNumberValue("columnCount", this.columnCount);
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
        if(this.index){
            writer.writeNumberValue("index", this.index);
        }
        if(this.numberFormat){
            writer.writeObjectValue<JsonImpl>("numberFormat", new JsonImpl(this.numberFormat));
        }
        if(this.rowCount){
            writer.writeNumberValue("rowCount", this.rowCount);
        }
        if(this.rows && this.rows.length != 0){        const rowsArrValue: WorkbookRangeViewImpl[] = []; this.rows?.forEach(element => {rowsArrValue.push(element instanceof WorkbookRangeViewImpl? element : new WorkbookRangeViewImpl(element));});
            writer.writeCollectionOfObjectValues<WorkbookRangeViewImpl>("rows", rowsArrValue);
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
        writer.writeAdditionalData(this.additionalData);
    };
}
