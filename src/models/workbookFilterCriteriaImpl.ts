import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookIconFromDiscriminatorValue} from './createWorkbookIconFromDiscriminatorValue';
import {JsonImpl, WorkbookIconImpl} from './index';
import {Json} from './json';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {WorkbookIcon} from './workbookIcon';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFilterCriteriaImpl implements WorkbookFilterCriteria {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The color property */
    private _color?: string | undefined;
    /** The criterion1 property */
    private _criterion1?: string | undefined;
    /** The criterion2 property */
    private _criterion2?: string | undefined;
    /** The dynamicCriteria property */
    private _dynamicCriteria?: string | undefined;
    /** The filterOn property */
    private _filterOn?: string | undefined;
    /** The icon property */
    private _icon?: WorkbookIcon | undefined;
    /** The operator property */
    private _operator?: string | undefined;
    /** The values property */
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the color property value. The color property
     * @returns a string
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. The color property
     * @param value Value to set for the color property.
     */
    public set color(value: string | undefined) {
        if(value) {
            this._color = value;
        }
    };
    /**
     * Instantiates a new workbookFilterCriteria and sets the default values.
     * @param workbookFilterCriteriaParameterValue 
     */
    public constructor(workbookFilterCriteriaParameterValue?: WorkbookFilterCriteria | undefined) {
        this._additionalData = workbookFilterCriteriaParameterValue?.additionalData ? workbookFilterCriteriaParameterValue?.additionalData! : {};
        this._color = workbookFilterCriteriaParameterValue?.color;
        this._criterion1 = workbookFilterCriteriaParameterValue?.criterion1;
        this._criterion2 = workbookFilterCriteriaParameterValue?.criterion2;
        this._dynamicCriteria = workbookFilterCriteriaParameterValue?.dynamicCriteria;
        this._filterOn = workbookFilterCriteriaParameterValue?.filterOn;
        this._icon = workbookFilterCriteriaParameterValue?.icon;
        this._operator = workbookFilterCriteriaParameterValue?.operator;
        this._values = workbookFilterCriteriaParameterValue?.values;
    };
    /**
     * Gets the criterion1 property value. The criterion1 property
     * @returns a string
     */
    public get criterion1() {
        return this._criterion1;
    };
    /**
     * Sets the criterion1 property value. The criterion1 property
     * @param value Value to set for the criterion1 property.
     */
    public set criterion1(value: string | undefined) {
        if(value) {
            this._criterion1 = value;
        }
    };
    /**
     * Gets the criterion2 property value. The criterion2 property
     * @returns a string
     */
    public get criterion2() {
        return this._criterion2;
    };
    /**
     * Sets the criterion2 property value. The criterion2 property
     * @param value Value to set for the criterion2 property.
     */
    public set criterion2(value: string | undefined) {
        if(value) {
            this._criterion2 = value;
        }
    };
    /**
     * Gets the dynamicCriteria property value. The dynamicCriteria property
     * @returns a string
     */
    public get dynamicCriteria() {
        return this._dynamicCriteria;
    };
    /**
     * Sets the dynamicCriteria property value. The dynamicCriteria property
     * @param value Value to set for the dynamicCriteria property.
     */
    public set dynamicCriteria(value: string | undefined) {
        if(value) {
            this._dynamicCriteria = value;
        }
    };
    /**
     * Gets the filterOn property value. The filterOn property
     * @returns a string
     */
    public get filterOn() {
        return this._filterOn;
    };
    /**
     * Sets the filterOn property value. The filterOn property
     * @param value Value to set for the filterOn property.
     */
    public set filterOn(value: string | undefined) {
        if(value) {
            this._filterOn = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "color": n => { this.color = n.getStringValue(); },
            "criterion1": n => { this.criterion1 = n.getStringValue(); },
            "criterion2": n => { this.criterion2 = n.getStringValue(); },
            "dynamicCriteria": n => { this.dynamicCriteria = n.getStringValue(); },
            "filterOn": n => { this.filterOn = n.getStringValue(); },
            "icon": n => { this.icon = n.getObjectValue<WorkbookIconImpl>(createWorkbookIconFromDiscriminatorValue); },
            "operator": n => { this.operator = n.getStringValue(); },
            "values": n => { this.values = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the icon property value. The icon property
     * @returns a WorkbookIconInterface
     */
    public get icon() {
        return this._icon;
    };
    /**
     * Sets the icon property value. The icon property
     * @param value Value to set for the icon property.
     */
    public set icon(value: WorkbookIcon | undefined) {
        if(value) {
            this._icon = value instanceof WorkbookIconImpl? value : new WorkbookIconImpl(value);
        }
    };
    /**
     * Gets the operator property value. The operator property
     * @returns a string
     */
    public get operator() {
        return this._operator;
    };
    /**
     * Sets the operator property value. The operator property
     * @param value Value to set for the operator property.
     */
    public set operator(value: string | undefined) {
        if(value) {
            this._operator = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.color){
            writer.writeStringValue("color", this.color);
        }
        if(this.criterion1){
            writer.writeStringValue("criterion1", this.criterion1);
        }
        if(this.criterion2){
            writer.writeStringValue("criterion2", this.criterion2);
        }
        if(this.dynamicCriteria){
            writer.writeStringValue("dynamicCriteria", this.dynamicCriteria);
        }
        if(this.filterOn){
            writer.writeStringValue("filterOn", this.filterOn);
        }
        if(this.icon){
            writer.writeObjectValue<WorkbookIconImpl>("icon", (!this.icon || this.icon instanceof WorkbookIconImpl? this.icon : new WorkbookIconImpl(this.icon)));
        }
        if(this.operator){
            writer.writeStringValue("operator", this.operator);
        }
        if(this.values){
            writer.writeObjectValue<JsonImpl>("values", (!this.values || this.values instanceof JsonImpl? this.values : new JsonImpl(this.values)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the values property value. The values property
     * @returns a JsonInterface
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. The values property
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        if(value) {
            this._values = value instanceof JsonImpl? value : new JsonImpl(value);
        }
    };
}
