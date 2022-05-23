import {ServiceUpdateMessageViewpoint} from './serviceUpdateMessageViewpoint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUpdateMessageViewpointImpl implements AdditionalDataHolder, Parsable, ServiceUpdateMessageViewpoint {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether the user archived the message. */
    public isArchived?: boolean | undefined;
    /** Indicates whether the user marked the message as favorite. */
    public isFavorited?: boolean | undefined;
    /** Indicates whether the user read the message. */
    public isRead?: boolean | undefined;
    /**
     * Instantiates a new serviceUpdateMessageViewpoint and sets the default values.
     * @param serviceUpdateMessageViewpointParameterValue 
     */
    public constructor(serviceUpdateMessageViewpointParameterValue?: ServiceUpdateMessageViewpoint | undefined) {
        this.additionalData = serviceUpdateMessageViewpointParameterValue?.additionalData ? serviceUpdateMessageViewpointParameterValue?.additionalData! : {}
        this.isArchived = serviceUpdateMessageViewpointParameterValue?.isArchived ;
        this.isFavorited = serviceUpdateMessageViewpointParameterValue?.isFavorited ;
        this.isRead = serviceUpdateMessageViewpointParameterValue?.isRead ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isArchived": n => { this.isArchived = n.getBooleanValue(); },
            "isFavorited": n => { this.isFavorited = n.getBooleanValue(); },
            "isRead": n => { this.isRead = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isArchived){
        writer.writeBooleanValue("isArchived", this.isArchived);
        }
        if(this.isFavorited){
        writer.writeBooleanValue("isFavorited", this.isFavorited);
        }
        if(this.isRead){
        writer.writeBooleanValue("isRead", this.isRead);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
