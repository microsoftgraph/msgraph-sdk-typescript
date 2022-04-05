import {AttachmentItem} from '../../../../../../../../../../../../models/';
import {createAttachmentItemFromDiscriminatorValue} from '../../../../../../../../../../../../models/createAttachmentItemFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createUploadSession method.  */
export class CreateUploadSessionRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The AttachmentItem property  */
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
     * Gets the attachmentItem property value. The AttachmentItem property
     * @returns a attachmentItem
     */
    public get attachmentItem() {
        return this._attachmentItem;
    };
    /**
     * Sets the attachmentItem property value. The AttachmentItem property
     * @param value Value to set for the AttachmentItem property.
     */
    public set attachmentItem(value: AttachmentItem | undefined) {
        this._attachmentItem = value;
    };
    /**
     * Instantiates a new createUploadSessionRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "attachmentItem": (o, n) => { (o as unknown as CreateUploadSessionRequestBody).attachmentItem = n.getObjectValue<AttachmentItem>(createAttachmentItemFromDiscriminatorValue); },
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
