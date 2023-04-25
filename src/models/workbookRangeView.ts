import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookRangeViewFromDiscriminatorValue} from './createWorkbookRangeViewFromDiscriminatorValue';
import {Entity, Json} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookRangeView extends Entity implements Parsable {
    /** Represents the cell addresses */
    private _cellAddresses?: Json | undefined;
    /** Returns the number of visible columns. Read-only. */
    private _columnCount?: number | undefined;
    /** Represents the formula in A1-style notation. */
    private _formulas?: Json | undefined;
    /** Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German. */
    private _formulasLocal?: Json | undefined;
    /** Represents the formula in R1C1-style notation. */
    private _formulasR1C1?: Json | undefined;
    /** Index of the range. */
    private _index?: number | undefined;
    /** Represents Excel's number format code for the given cell. Read-only. */
    private _numberFormat?: Json | undefined;
    /** Returns the number of visible rows. Read-only. */
    private _rowCount?: number | undefined;
    /** Represents a collection of range views associated with the range. Read-only. Read-only. */
    private _rows?: WorkbookRangeView[] | undefined;
    /** Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only. */
    private _text?: Json | undefined;
    /** Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    private _values?: Json | undefined;
    /** Represents the type of data of each cell. Read-only. The possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. */
    private _valueTypes?: Json | undefined;
    /**
     * Gets the cellAddresses property value. Represents the cell addresses
     * @returns a Json
     */
    public get cellAddresses() {
        return this._cellAddresses;
    };
    /**
     * Sets the cellAddresses property value. Represents the cell addresses
     * @param value Value to set for the cellAddresses property.
     */
    public set cellAddresses(value: Json | undefined) {
        this._cellAddresses = value;
    };
    /**
     * Gets the columnCount property value. Returns the number of visible columns. Read-only.
     * @returns a integer
     */
    public get columnCount() {
        return this._columnCount;
    };
    /**
     * Sets the columnCount property value. Returns the number of visible columns. Read-only.
     * @param value Value to set for the columnCount property.
     */
    public set columnCount(value: number | undefined) {
        this._columnCount = value;
    };
    /**
     * Instantiates a new WorkbookRangeView and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the formulas property value. Represents the formula in A1-style notation.
     * @returns a Json
     */
    public get formulas() {
        return this._formulas;
    };
    /**
     * Sets the formulas property value. Represents the formula in A1-style notation.
     * @param value Value to set for the formulas property.
     */
    public set formulas(value: Json | undefined) {
        this._formulas = value;
    };
    /**
     * Gets the formulasLocal property value. Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     * @returns a Json
     */
    public get formulasLocal() {
        return this._formulasLocal;
    };
    /**
     * Sets the formulasLocal property value. Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     * @param value Value to set for the formulasLocal property.
     */
    public set formulasLocal(value: Json | undefined) {
        this._formulasLocal = value;
    };
    /**
     * Gets the formulasR1C1 property value. Represents the formula in R1C1-style notation.
     * @returns a Json
     */
    public get formulasR1C1() {
        return this._formulasR1C1;
    };
    /**
     * Sets the formulasR1C1 property value. Represents the formula in R1C1-style notation.
     * @param value Value to set for the formulasR1C1 property.
     */
    public set formulasR1C1(value: Json | undefined) {
        this._formulasR1C1 = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "cellAddresses": n => { this.cellAddresses = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "columnCount": n => { this.columnCount = n.getNumberValue(); },
            "formulas": n => { this.formulas = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "formulasLocal": n => { this.formulasLocal = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "formulasR1C1": n => { this.formulasR1C1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "index": n => { this.index = n.getNumberValue(); },
            "numberFormat": n => { this.numberFormat = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "rowCount": n => { this.rowCount = n.getNumberValue(); },
            "rows": n => { this.rows = n.getCollectionOfObjectValues<WorkbookRangeView>(createWorkbookRangeViewFromDiscriminatorValue); },
            "text": n => { this.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "values": n => { this.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "valueTypes": n => { this.valueTypes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the index property value. Index of the range.
     * @returns a integer
     */
    public get index() {
        return this._index;
    };
    /**
     * Sets the index property value. Index of the range.
     * @param value Value to set for the index property.
     */
    public set index(value: number | undefined) {
        this._index = value;
    };
    /**
     * Gets the numberFormat property value. Represents Excel's number format code for the given cell. Read-only.
     * @returns a Json
     */
    public get numberFormat() {
        return this._numberFormat;
    };
    /**
     * Sets the numberFormat property value. Represents Excel's number format code for the given cell. Read-only.
     * @param value Value to set for the numberFormat property.
     */
    public set numberFormat(value: Json | undefined) {
        this._numberFormat = value;
    };
    /**
     * Gets the rowCount property value. Returns the number of visible rows. Read-only.
     * @returns a integer
     */
    public get rowCount() {
        return this._rowCount;
    };
    /**
     * Sets the rowCount property value. Returns the number of visible rows. Read-only.
     * @param value Value to set for the rowCount property.
     */
    public set rowCount(value: number | undefined) {
        this._rowCount = value;
    };
    /**
     * Gets the rows property value. Represents a collection of range views associated with the range. Read-only. Read-only.
     * @returns a workbookRangeView
     */
    public get rows() {
        return this._rows;
    };
    /**
     * Sets the rows property value. Represents a collection of range views associated with the range. Read-only. Read-only.
     * @param value Value to set for the rows property.
     */
    public set rows(value: WorkbookRangeView[] | undefined) {
        this._rows = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Json>("cellAddresses", this.cellAddresses);
        writer.writeNumberValue("columnCount", this.columnCount);
        writer.writeObjectValue<Json>("formulas", this.formulas);
        writer.writeObjectValue<Json>("formulasLocal", this.formulasLocal);
        writer.writeObjectValue<Json>("formulasR1C1", this.formulasR1C1);
        writer.writeNumberValue("index", this.index);
        writer.writeObjectValue<Json>("numberFormat", this.numberFormat);
        writer.writeNumberValue("rowCount", this.rowCount);
        writer.writeCollectionOfObjectValues<WorkbookRangeView>("rows", this.rows);
        writer.writeObjectValue<Json>("text", this.text);
        writer.writeObjectValue<Json>("values", this.values);
        writer.writeObjectValue<Json>("valueTypes", this.valueTypes);
    };
    /**
     * Gets the text property value. Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
     * @returns a Json
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
     * @param value Value to set for the text property.
     */
    public set text(value: Json | undefined) {
        this._text = value;
    };
    /**
     * Gets the values property value. Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
    /**
     * Gets the valueTypes property value. Represents the type of data of each cell. Read-only. The possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error.
     * @returns a Json
     */
    public get valueTypes() {
        return this._valueTypes;
    };
    /**
     * Sets the valueTypes property value. Represents the type of data of each cell. Read-only. The possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error.
     * @param value Value to set for the valueTypes property.
     */
    public set valueTypes(value: Json | undefined) {
        this._valueTypes = value;
    };
}
