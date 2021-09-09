import {Label} from './label';
import {PropertyType} from './propertyType';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Property implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _aliases?: string[] | undefined;
    private _isQueryable?: boolean | undefined;
    private _isRefinable?: boolean | undefined;
    private _isRetrievable?: boolean | undefined;
    private _isSearchable?: boolean | undefined;
    private _labels?: Label[] | undefined;
    private _name?: string | undefined;
    private _type?: PropertyType | undefined;
    /**
     * Instantiates a new property and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the aliases property value. 
     * @returns a string
     */
    public get aliases() {
        return this._aliases;
    };
    /**
     * Gets the isQueryable property value. 
     * @returns a boolean
     */
    public get isQueryable() {
        return this._isQueryable;
    };
    /**
     * Gets the isRefinable property value. 
     * @returns a boolean
     */
    public get isRefinable() {
        return this._isRefinable;
    };
    /**
     * Gets the isRetrievable property value. 
     * @returns a boolean
     */
    public get isRetrievable() {
        return this._isRetrievable;
    };
    /**
     * Gets the isSearchable property value. 
     * @returns a boolean
     */
    public get isSearchable() {
        return this._isSearchable;
    };
    /**
     * Gets the labels property value. 
     * @returns a label
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the type property value. 
     * @returns a propertyType
     */
    public get type() {
        return this._type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["aliases", (o, n) => { (o as unknown as Property).aliases = n.getCollectionOfPrimitiveValues<string>(); }],
            ["isQueryable", (o, n) => { (o as unknown as Property).isQueryable = n.getBooleanValue(); }],
            ["isRefinable", (o, n) => { (o as unknown as Property).isRefinable = n.getBooleanValue(); }],
            ["isRetrievable", (o, n) => { (o as unknown as Property).isRetrievable = n.getBooleanValue(); }],
            ["isSearchable", (o, n) => { (o as unknown as Property).isSearchable = n.getBooleanValue(); }],
            ["labels", (o, n) => { (o as unknown as Property).labels = n.getCollectionOfObjectValues<Label>(Label); }],
            ["name", (o, n) => { (o as unknown as Property).name = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as Property).type = n.getEnumValue<PropertyType>(PropertyType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("aliases", this.aliases);
        writer.writeBooleanValue("isQueryable", this.isQueryable);
        writer.writeBooleanValue("isRefinable", this.isRefinable);
        writer.writeBooleanValue("isRetrievable", this.isRetrievable);
        writer.writeBooleanValue("isSearchable", this.isSearchable);
        writer.writeCollectionOfObjectValues<Label>("labels", this.labels);
        writer.writeStringValue("name", this.name);
        writer.writeEnumValue<PropertyType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the aliases property value. 
     * @param value Value to set for the aliases property.
     */
    public set aliases(value: string[] | undefined) {
        this._aliases = value;
    };
    /**
     * Sets the isQueryable property value. 
     * @param value Value to set for the isQueryable property.
     */
    public set isQueryable(value: boolean | undefined) {
        this._isQueryable = value;
    };
    /**
     * Sets the isRefinable property value. 
     * @param value Value to set for the isRefinable property.
     */
    public set isRefinable(value: boolean | undefined) {
        this._isRefinable = value;
    };
    /**
     * Sets the isRetrievable property value. 
     * @param value Value to set for the isRetrievable property.
     */
    public set isRetrievable(value: boolean | undefined) {
        this._isRetrievable = value;
    };
    /**
     * Sets the isSearchable property value. 
     * @param value Value to set for the isSearchable property.
     */
    public set isSearchable(value: boolean | undefined) {
        this._isSearchable = value;
    };
    /**
     * Sets the labels property value. 
     * @param value Value to set for the labels property.
     */
    public set labels(value: Label[] | undefined) {
        this._labels = value;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: PropertyType | undefined) {
        this._type = value;
    };
}
