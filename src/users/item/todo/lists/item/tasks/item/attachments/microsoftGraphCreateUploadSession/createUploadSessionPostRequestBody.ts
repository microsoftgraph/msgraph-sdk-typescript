import {AttachmentInfo} from '../../../../../../../../../models/';
import {createAttachmentInfoFromDiscriminatorValue} from '../../../../../../../../../models/createAttachmentInfoFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CreateUploadSessionPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _attachmentInfo?: AttachmentInfo | undefined;
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
     * Gets the attachmentInfo property value. 
     * @returns a attachmentInfo
     */
    public get attachmentInfo() {
        return this._attachmentInfo;
    };
    /**
     * Sets the attachmentInfo property value. 
     * @param value Value to set for the attachmentInfo property.
     */
    public set attachmentInfo(value: AttachmentInfo | undefined) {
        this._attachmentInfo = value;
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
            "attachmentInfo": n => { this.attachmentInfo = n.getObjectValue<AttachmentInfo>(createAttachmentInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AttachmentInfo>("attachmentInfo", this.attachmentInfo);
        writer.writeAdditionalData(this.additionalData);
    };
}
