import {createListItemVersionFromDiscriminatorValue} from './createListItemVersionFromDiscriminatorValue';
import {ListItemVersion} from './listItemVersion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the versions property of the microsoft.graph.listItem entity.  */
export class ListItemVersionCollectionResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _nextLink?: string | undefined;
    private _value?: ListItemVersion[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new ListItemVersionCollectionResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["@odata.nextLink", (o, n) => { (o as unknown as ListItemVersionCollectionResponse).nextLink = n.getStringValue(); }],
            ["value", (o, n) => { (o as unknown as ListItemVersionCollectionResponse).value = n.getCollectionOfObjectValues<ListItemVersion>(createListItemVersionFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the @odata.nextLink property value. 
     * @returns a string
     */
    public get nextLink() {
        return this._nextLink;
    };
    /**
     * Sets the @odata.nextLink property value. 
     * @param value Value to set for the nextLink property.
     */
    public set nextLink(value: string | undefined) {
        this._nextLink = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        writer.writeCollectionOfObjectValues<ListItemVersion>("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. 
     * @returns a listItemVersion
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: ListItemVersion[] | undefined) {
        this._value = value;
    };
}
