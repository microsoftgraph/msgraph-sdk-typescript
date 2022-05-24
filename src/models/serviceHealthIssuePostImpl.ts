import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {ItemBodyImpl} from './index';
import {ItemBody} from './itemBody';
import {PostType} from './postType';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthIssuePostImpl implements AdditionalDataHolder, Parsable, ServiceHealthIssuePost {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The published time of the post. */
    public createdDateTime?: Date | undefined;
    /** The content of the service issue post. */
    public description?: ItemBody | undefined;
    /** The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue. */
    public postType?: PostType | undefined;
    /**
     * Instantiates a new serviceHealthIssuePost and sets the default values.
     * @param serviceHealthIssuePostParameterValue 
     */
    public constructor(serviceHealthIssuePostParameterValue?: ServiceHealthIssuePost | undefined) {
        this.additionalData = serviceHealthIssuePostParameterValue?.additionalData ? serviceHealthIssuePostParameterValue?.additionalData! : {}
        this.createdDateTime = serviceHealthIssuePostParameterValue?.createdDateTime ;
        this.description = serviceHealthIssuePostParameterValue?.description ;
        this.postType = serviceHealthIssuePostParameterValue?.postType ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeObjectValue<ItemBodyImpl>("description", new ItemBodyImpl(this.description));
        }
        if(this.postType){
        writer.writeEnumValue<PostType>("postType", this.postType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
