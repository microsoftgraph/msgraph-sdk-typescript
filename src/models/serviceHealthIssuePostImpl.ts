import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {ItemBodyImpl} from './index';
import {ItemBody} from './itemBody';
import {PostType} from './postType';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthIssuePostImpl implements ServiceHealthIssuePost {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The published time of the post. */
    private _createdDateTime?: Date | undefined;
    /** The content of the service issue post. */
    private _description?: ItemBody | undefined;
    /** The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue. */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new serviceHealthIssuePost and sets the default values.
     * @param serviceHealthIssuePostParameterValue 
     */
    public constructor(serviceHealthIssuePostParameterValue?: ServiceHealthIssuePost | undefined) {
        this._additionalData = serviceHealthIssuePostParameterValue?.additionalData ? serviceHealthIssuePostParameterValue?.additionalData! : {};
        this._createdDateTime = serviceHealthIssuePostParameterValue?.createdDateTime;
        this._description = serviceHealthIssuePostParameterValue?.description;
        this._postType = serviceHealthIssuePostParameterValue?.postType;
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
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. The content of the service issue post.
     * @returns a ItemBodyInterface
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The content of the service issue post.
     * @param value Value to set for the description property.
     */
    public set description(value: ItemBody | undefined) {
        if(value) {
            this._description = value instanceof ItemBodyImpl? value : new ItemBodyImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getObjectValue<ItemBodyImpl>(createItemBodyFromDiscriminatorValue); },
            "postType": n => { this.postType = n.getEnumValue<PostType>(PostType); },
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
        if(value) {
            this._postType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeObjectValue<ItemBodyImpl>("description", (!this.description || this.description instanceof ItemBodyImpl? this.description : new ItemBodyImpl(this.description)));
        }
        if(this.postType){
            writer.writeEnumValue<PostType>("postType", this.postType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
