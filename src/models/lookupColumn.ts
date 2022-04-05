import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LookupColumn implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether multiple values can be selected from the source.  */
    private _allowMultipleValues?: boolean | undefined;
    /** Indicates whether values in the column should be able to exceed the standard limit of 255 characters.  */
    private _allowUnlimitedLength?: boolean | undefined;
    /** The name of the lookup source column.  */
    private _columnName?: string | undefined;
    /** The unique identifier of the lookup source list.  */
    private _listId?: string | undefined;
    /** If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the primary lookup. Use the list item looked up by the primary as the source for the column named here.  */
    private _primaryLookupColumnId?: string | undefined;
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
     * Gets the allowMultipleValues property value. Indicates whether multiple values can be selected from the source.
     * @returns a boolean
     */
    public get allowMultipleValues() {
        return this._allowMultipleValues;
    };
    /**
     * Sets the allowMultipleValues property value. Indicates whether multiple values can be selected from the source.
     * @param value Value to set for the allowMultipleValues property.
     */
    public set allowMultipleValues(value: boolean | undefined) {
        this._allowMultipleValues = value;
    };
    /**
     * Gets the allowUnlimitedLength property value. Indicates whether values in the column should be able to exceed the standard limit of 255 characters.
     * @returns a boolean
     */
    public get allowUnlimitedLength() {
        return this._allowUnlimitedLength;
    };
    /**
     * Sets the allowUnlimitedLength property value. Indicates whether values in the column should be able to exceed the standard limit of 255 characters.
     * @param value Value to set for the allowUnlimitedLength property.
     */
    public set allowUnlimitedLength(value: boolean | undefined) {
        this._allowUnlimitedLength = value;
    };
    /**
     * Gets the columnName property value. The name of the lookup source column.
     * @returns a string
     */
    public get columnName() {
        return this._columnName;
    };
    /**
     * Sets the columnName property value. The name of the lookup source column.
     * @param value Value to set for the columnName property.
     */
    public set columnName(value: string | undefined) {
        this._columnName = value;
    };
    /**
     * Instantiates a new lookupColumn and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "allowMultipleValues": (o, n) => { (o as unknown as LookupColumn).allowMultipleValues = n.getBooleanValue(); },
            "allowUnlimitedLength": (o, n) => { (o as unknown as LookupColumn).allowUnlimitedLength = n.getBooleanValue(); },
            "columnName": (o, n) => { (o as unknown as LookupColumn).columnName = n.getStringValue(); },
            "listId": (o, n) => { (o as unknown as LookupColumn).listId = n.getStringValue(); },
            "primaryLookupColumnId": (o, n) => { (o as unknown as LookupColumn).primaryLookupColumnId = n.getStringValue(); },
        };
    };
    /**
     * Gets the listId property value. The unique identifier of the lookup source list.
     * @returns a string
     */
    public get listId() {
        return this._listId;
    };
    /**
     * Sets the listId property value. The unique identifier of the lookup source list.
     * @param value Value to set for the listId property.
     */
    public set listId(value: string | undefined) {
        this._listId = value;
    };
    /**
     * Gets the primaryLookupColumnId property value. If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the primary lookup. Use the list item looked up by the primary as the source for the column named here.
     * @returns a string
     */
    public get primaryLookupColumnId() {
        return this._primaryLookupColumnId;
    };
    /**
     * Sets the primaryLookupColumnId property value. If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the primary lookup. Use the list item looked up by the primary as the source for the column named here.
     * @param value Value to set for the primaryLookupColumnId property.
     */
    public set primaryLookupColumnId(value: string | undefined) {
        this._primaryLookupColumnId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowMultipleValues", this.allowMultipleValues);
        writer.writeBooleanValue("allowUnlimitedLength", this.allowUnlimitedLength);
        writer.writeStringValue("columnName", this.columnName);
        writer.writeStringValue("listId", this.listId);
        writer.writeStringValue("primaryLookupColumnId", this.primaryLookupColumnId);
        writer.writeAdditionalData(this.additionalData);
    };
}
