import {createAllowedValueFromDiscriminatorValue} from './createAllowedValueFromDiscriminatorValue';
import {AllowedValue, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CustomSecurityAttributeDefinition extends Entity implements Parsable {
    /** The allowedValues property */
    private _allowedValues?: AllowedValue[] | undefined;
    /** The attributeSet property */
    private _attributeSet?: string | undefined;
    /** The description property */
    private _description?: string | undefined;
    /** The isCollection property */
    private _isCollection?: boolean | undefined;
    /** The isSearchable property */
    private _isSearchable?: boolean | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The status property */
    private _status?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /** The usePreDefinedValuesOnly property */
    private _usePreDefinedValuesOnly?: boolean | undefined;
    /**
     * Gets the allowedValues property value. The allowedValues property
     * @returns a allowedValue
     */
    public get allowedValues() {
        return this._allowedValues;
    };
    /**
     * Sets the allowedValues property value. The allowedValues property
     * @param value Value to set for the allowedValues property.
     */
    public set allowedValues(value: AllowedValue[] | undefined) {
        this._allowedValues = value;
    };
    /**
     * Gets the attributeSet property value. The attributeSet property
     * @returns a string
     */
    public get attributeSet() {
        return this._attributeSet;
    };
    /**
     * Sets the attributeSet property value. The attributeSet property
     * @param value Value to set for the attributeSet property.
     */
    public set attributeSet(value: string | undefined) {
        this._attributeSet = value;
    };
    /**
     * Instantiates a new CustomSecurityAttributeDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedValues": n => { this.allowedValues = n.getCollectionOfObjectValues<AllowedValue>(createAllowedValueFromDiscriminatorValue); },
            "attributeSet": n => { this.attributeSet = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "isCollection": n => { this.isCollection = n.getBooleanValue(); },
            "isSearchable": n => { this.isSearchable = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "usePreDefinedValuesOnly": n => { this.usePreDefinedValuesOnly = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isCollection property value. The isCollection property
     * @returns a boolean
     */
    public get isCollection() {
        return this._isCollection;
    };
    /**
     * Sets the isCollection property value. The isCollection property
     * @param value Value to set for the isCollection property.
     */
    public set isCollection(value: boolean | undefined) {
        this._isCollection = value;
    };
    /**
     * Gets the isSearchable property value. The isSearchable property
     * @returns a boolean
     */
    public get isSearchable() {
        return this._isSearchable;
    };
    /**
     * Sets the isSearchable property value. The isSearchable property
     * @param value Value to set for the isSearchable property.
     */
    public set isSearchable(value: boolean | undefined) {
        this._isSearchable = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AllowedValue>("allowedValues", this.allowedValues);
        writer.writeStringValue("attributeSet", this.attributeSet);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("isCollection", this.isCollection);
        writer.writeBooleanValue("isSearchable", this.isSearchable);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("status", this.status);
        writer.writeStringValue("type", this.type);
        writer.writeBooleanValue("usePreDefinedValuesOnly", this.usePreDefinedValuesOnly);
    };
    /**
     * Gets the status property value. The status property
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Gets the usePreDefinedValuesOnly property value. The usePreDefinedValuesOnly property
     * @returns a boolean
     */
    public get usePreDefinedValuesOnly() {
        return this._usePreDefinedValuesOnly;
    };
    /**
     * Sets the usePreDefinedValuesOnly property value. The usePreDefinedValuesOnly property
     * @param value Value to set for the usePreDefinedValuesOnly property.
     */
    public set usePreDefinedValuesOnly(value: boolean | undefined) {
        this._usePreDefinedValuesOnly = value;
    };
}
