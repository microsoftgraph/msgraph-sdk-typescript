import {DriveItemUploadablePropertiesImpl} from '../../../models/';
import {createDriveItemUploadablePropertiesFromDiscriminatorValue} from '../../../models/createDriveItemUploadablePropertiesFromDiscriminatorValue';
import {DriveItemUploadableProperties} from '../../../models/driveItemUploadableProperties';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createUploadSession method. */
export class CreateUploadSessionPostRequestBodyImpl implements CreateUploadSessionPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new createUploadSessionPostRequestBody and sets the default values.
     * @param createUploadSessionPostRequestBodyParameterValue 
     */
    public constructor(createUploadSessionPostRequestBodyParameterValue?: CreateUploadSessionPostRequestBody | undefined) {
        this._additionalData = createUploadSessionPostRequestBodyParameterValue?.additionalData ? createUploadSessionPostRequestBodyParameterValue?.additionalData! : {};
        this._item = createUploadSessionPostRequestBodyParameterValue?.item;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "item": n => { this.item = n.getObjectValue<DriveItemUploadablePropertiesImpl>(createDriveItemUploadablePropertiesFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the item property value. The item property
     * @returns a DriveItemUploadablePropertiesInterface
     */
    public get item() {
        return this._item;
    };
    /**
     * Sets the item property value. The item property
     * @param value Value to set for the item property.
     */
    public set item(value: DriveItemUploadableProperties | undefined) {
        if(value) {
            this._item = value instanceof DriveItemUploadablePropertiesImpl? value as DriveItemUploadablePropertiesImpl: new DriveItemUploadablePropertiesImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.item){
            writer.writeObjectValue<DriveItemUploadablePropertiesImpl>("item", (this.item instanceof DriveItemUploadablePropertiesImpl? this.item as DriveItemUploadablePropertiesImpl: new DriveItemUploadablePropertiesImpl(this.item)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
