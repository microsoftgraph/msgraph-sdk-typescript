import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookIconFromDiscriminatorValue} from './createWorkbookIconFromDiscriminatorValue';
import {Json, WorkbookIcon} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFilterCriteria implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _color?: string | undefined;
    private _criterion1?: string | undefined;
    private _criterion2?: string | undefined;
    private _dynamicCriteria?: string | undefined;
    private _filterOn?: string | undefined;
    private _icon?: WorkbookIcon | undefined;
    private _operator?: string | undefined;
    private _values?: Json | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the color property value. 
     * @returns a string
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. 
     * @param value Value to set for the color property.
     */
    public set color(value: string | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new workbookFilterCriteria and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the criterion1 property value. 
     * @returns a string
     */
    public get criterion1() {
        return this._criterion1;
    };
    /**
     * Sets the criterion1 property value. 
     * @param value Value to set for the criterion1 property.
     */
    public set criterion1(value: string | undefined) {
        this._criterion1 = value;
    };
    /**
     * Gets the criterion2 property value. 
     * @returns a string
     */
    public get criterion2() {
        return this._criterion2;
    };
    /**
     * Sets the criterion2 property value. 
     * @param value Value to set for the criterion2 property.
     */
    public set criterion2(value: string | undefined) {
        this._criterion2 = value;
    };
    /**
     * Gets the dynamicCriteria property value. 
     * @returns a string
     */
    public get dynamicCriteria() {
        return this._dynamicCriteria;
    };
    /**
     * Sets the dynamicCriteria property value. 
     * @param value Value to set for the dynamicCriteria property.
     */
    public set dynamicCriteria(value: string | undefined) {
        this._dynamicCriteria = value;
    };
    /**
     * Gets the filterOn property value. 
     * @returns a string
     */
    public get filterOn() {
        return this._filterOn;
    };
    /**
     * Sets the filterOn property value. 
     * @param value Value to set for the filterOn property.
     */
    public set filterOn(value: string | undefined) {
        this._filterOn = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "color": (o, n) => { (o as unknown as WorkbookFilterCriteria).color = n.getStringValue(); },
            "criterion1": (o, n) => { (o as unknown as WorkbookFilterCriteria).criterion1 = n.getStringValue(); },
            "criterion2": (o, n) => { (o as unknown as WorkbookFilterCriteria).criterion2 = n.getStringValue(); },
            "dynamicCriteria": (o, n) => { (o as unknown as WorkbookFilterCriteria).dynamicCriteria = n.getStringValue(); },
            "filterOn": (o, n) => { (o as unknown as WorkbookFilterCriteria).filterOn = n.getStringValue(); },
            "icon": (o, n) => { (o as unknown as WorkbookFilterCriteria).icon = n.getObjectValue<WorkbookIcon>(createWorkbookIconFromDiscriminatorValue); },
            "operator": (o, n) => { (o as unknown as WorkbookFilterCriteria).operator = n.getStringValue(); },
            "values": (o, n) => { (o as unknown as WorkbookFilterCriteria).values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the icon property value. 
     * @returns a workbookIcon
     */
    public get icon() {
        return this._icon;
    };
    /**
     * Sets the icon property value. 
     * @param value Value to set for the icon property.
     */
    public set icon(value: WorkbookIcon | undefined) {
        this._icon = value;
    };
    /**
     * Gets the operator property value. 
     * @returns a string
     */
    public get operator() {
        return this._operator;
    };
    /**
     * Sets the operator property value. 
     * @param value Value to set for the operator property.
     */
    public set operator(value: string | undefined) {
        this._operator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("color", this.color);
        writer.writeStringValue("criterion1", this.criterion1);
        writer.writeStringValue("criterion2", this.criterion2);
        writer.writeStringValue("dynamicCriteria", this.dynamicCriteria);
        writer.writeStringValue("filterOn", this.filterOn);
        writer.writeObjectValue<WorkbookIcon>("icon", this.icon);
        writer.writeStringValue("operator", this.operator);
        writer.writeObjectValue<Json>("values", this.values);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the values property value. 
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. 
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
}
