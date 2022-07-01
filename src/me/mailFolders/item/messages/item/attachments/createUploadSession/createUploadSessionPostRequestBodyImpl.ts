import {AttachmentItemImpl} from '../../../../../../../models/';
import {AttachmentItem} from '../../../../../../../models/attachmentItem';
import {createAttachmentItemFromDiscriminatorValue} from '../../../../../../../models/createAttachmentItemFromDiscriminatorValue';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createUploadSession method. */
export class CreateUploadSessionPostRequestBodyImpl implements CreateUploadSessionPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The AttachmentItem property */
    private _attachmentItem?: AttachmentItem | undefined;
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
     * Gets the attachmentItem property value. The AttachmentItem property
     * @returns a AttachmentItemInterface
     */
    public get attachmentItem() {
        return this._attachmentItem;
    };
    /**
     * Sets the attachmentItem property value. The AttachmentItem property
     * @param value Value to set for the AttachmentItem property.
     */
    public set attachmentItem(value: AttachmentItem | undefined) {
        if(value) {
            this._attachmentItem = value instanceof AttachmentItemImpl? value : new AttachmentItemImpl(value);
        }
    };
    /**
     * Instantiates a new createUploadSessionPostRequestBody and sets the default values.
     * @param createUploadSessionPostRequestBodyParameterValue 
     */
    public constructor(createUploadSessionPostRequestBodyParameterValue?: CreateUploadSessionPostRequestBody | undefined) {
        this._additionalData = createUploadSessionPostRequestBodyParameterValue?.additionalData ? createUploadSessionPostRequestBodyParameterValue?.additionalData! : {};
        this._attachmentItem = createUploadSessionPostRequestBodyParameterValue?.attachmentItem;
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
            writer.writeObjectValue<AttachmentItemImpl>("attachmentItem", (!this.attachmentItem || this.attachmentItem instanceof AttachmentItemImpl? this.attachmentItem : new AttachmentItemImpl(this.attachmentItem)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
