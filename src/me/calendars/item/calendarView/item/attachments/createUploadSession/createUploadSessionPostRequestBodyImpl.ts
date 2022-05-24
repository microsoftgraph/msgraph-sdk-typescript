import {AttachmentItemImpl} from '../../../../../../../models/';
import {AttachmentItem} from '../../../../../../../models/attachmentItem';
import {createAttachmentItemFromDiscriminatorValue} from '../../../../../../../models/createAttachmentItemFromDiscriminatorValue';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createUploadSession method. */
export class CreateUploadSessionPostRequestBodyImpl implements AdditionalDataHolder, CreateUploadSessionPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The AttachmentItem property */
    public attachmentItem?: AttachmentItem | undefined;
    /**
     * Instantiates a new createUploadSessionPostRequestBody and sets the default values.
     * @param createUploadSessionPostRequestBodyParameterValue 
     */
    public constructor(createUploadSessionPostRequestBodyParameterValue?: CreateUploadSessionPostRequestBody | undefined) {
        this.additionalData = createUploadSessionPostRequestBodyParameterValue?.additionalData ? createUploadSessionPostRequestBodyParameterValue?.additionalData! : {}
        this.attachmentItem = createUploadSessionPostRequestBodyParameterValue?.attachmentItem ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attachmentItem": n => { this.attachmentItem = n.getObjectValue<AttachmentItemImpl>(createAttachmentItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attachmentItem){
        writer.writeObjectValue<AttachmentItemImpl>("attachmentItem", new AttachmentItemImpl(this.attachmentItem));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
