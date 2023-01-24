import {DriveItemUploadableProperties} from '../../../models/';
import {createDriveItemUploadablePropertiesFromDiscriminatorValue} from '../../../models/createDriveItemUploadablePropertiesFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CreateUploadSessionPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The item property */
    private _item?: DriveItemUploadableProperties | undefined;
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
            "item": n => { this.item = n.getObjectValue<DriveItemUploadableProperties>(createDriveItemUploadablePropertiesFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the item property value. The item property
     * @returns a driveItemUploadableProperties
     */
    public get item() {
        return this._item;
    };
    /**
     * Sets the item property value. The item property
     * @param value Value to set for the item property.
     */
    public set item(value: DriveItemUploadableProperties | undefined) {
        this._item = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DriveItemUploadableProperties>("item", this.item);
        writer.writeAdditionalData(this.additionalData);
    };
}
