import {PostImpl} from '../../../../../../../../../models/';
import {createPostFromDiscriminatorValue} from '../../../../../../../../../models/createPostFromDiscriminatorValue';
import {Post} from '../../../../../../../../../models/post';
import {ReplyRequestBody} from './replyRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reply method.  */
export class ReplyRequestBodyImpl implements AdditionalDataHolder, Parsable, ReplyRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The Post property  */
    post?: Post | undefined;
    /**
     * Instantiates a new replyRequestBody and sets the default values.
     * @param replyRequestBodyParameterValue 
     */
    public constructor(replyRequestBodyParameterValue?: ReplyRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = replyRequestBodyParameterValue?.additionalData ? {} : replyRequestBodyParameterValue?.additionalData!
        this.post = replyRequestBodyParameterValue?.post ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "post": n => { this.post = n.getObjectValue<PostImpl>(createPostFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.post){
        if(this.post)
        writer.writeObjectValue<PostImpl>("post", new PostImpl(this.post));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
