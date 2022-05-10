import {MessageImpl} from '../../../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../../../models/message';
import {CreateReplyAllRequestBody} from './createReplyAllRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createReplyAll method.  */
export class CreateReplyAllRequestBodyImpl implements AdditionalDataHolder, CreateReplyAllRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The Comment property  */
    comment?: string | undefined;
    /** The Message property  */
    message?: Message | undefined;
    /**
     * Instantiates a new createReplyAllRequestBody and sets the default values.
     * @param createReplyAllRequestBodyParameterValue 
     */
    public constructor(createReplyAllRequestBodyParameterValue?: CreateReplyAllRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = createReplyAllRequestBodyParameterValue?.additionalData ? {} : createReplyAllRequestBodyParameterValue?.additionalData!
        this.comment = createReplyAllRequestBodyParameterValue?.comment ;
        this.message = createReplyAllRequestBodyParameterValue?.message ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "message": n => { this.message = n.getObjectValue<MessageImpl>(createMessageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.comment){
        if(this.comment)
        writer.writeStringValue("comment", this.comment);
        }
        if(this.message){
        if(this.message)
        writer.writeObjectValue<MessageImpl>("message", new MessageImpl(this.message));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
