import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {ItemBody} from './index';
import {PostType} from './postType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthIssuePost implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The published time of the post.  */
    private _createdDateTime?: Date | undefined;
    /** The content of the service issue post.  */
    private _description?: ItemBody | undefined;
    /** The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue.  */
    private _postType?: PostType | undefined;
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
     * Instantiates a new serviceHealthIssuePost and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the createdDateTime property value. The published time of the post.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The published time of the post.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The content of the service issue post.
     * @returns a itemBody
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The content of the service issue post.
     * @param value Value to set for the description property.
     */
    public set description(value: ItemBody | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "createdDateTime": (o, n) => { (o as unknown as ServiceHealthIssuePost).createdDateTime = n.getDateValue(); },
            "description": (o, n) => { (o as unknown as ServiceHealthIssuePost).description = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "postType": (o, n) => { (o as unknown as ServiceHealthIssuePost).postType = n.getEnumValue<PostType>(PostType); },
        };
    };
    /**
     * Gets the postType property value. The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue.
     * @returns a postType
     */
    public get postType() {
        return this._postType;
    };
    /**
     * Sets the postType property value. The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue.
     * @param value Value to set for the postType property.
     */
    public set postType(value: PostType | undefined) {
        this._postType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<ItemBody>("description", this.description);
        writer.writeEnumValue<PostType>("postType", this.postType);
        writer.writeAdditionalData(this.additionalData);
    };
}
