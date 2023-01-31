import {AttachmentItem} from '../../../../../../../models/';
import {createAttachmentItemFromDiscriminatorValue} from '../../../../../../../models/createAttachmentItemFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CreateUploadSessionPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the attachmentItem property value. 
     * @returns a attachmentItem
     */
    public get attachmentItem() {
        return this._attachmentItem;
    };
    /**
     * Sets the attachmentItem property value. 
     * @param value Value to set for the AttachmentItem property.
     */
    public set attachmentItem(value: AttachmentItem | undefined) {
        this._attachmentItem = value;
    };
    /**
     * Instantiates a new createUploadSessionPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attachmentItem": n => { this.attachmentItem = n.getObjectValue<AttachmentItem>(createAttachmentItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AttachmentItem>("attachmentItem", this.attachmentItem);
        writer.writeAdditionalData(this.additionalData);
    };
}
