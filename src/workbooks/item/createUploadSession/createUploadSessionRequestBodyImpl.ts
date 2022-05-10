import {DriveItemUploadablePropertiesImpl} from '../../../models/';
import {createDriveItemUploadablePropertiesFromDiscriminatorValue} from '../../../models/createDriveItemUploadablePropertiesFromDiscriminatorValue';
import {DriveItemUploadableProperties} from '../../../models/driveItemUploadableProperties';
import {CreateUploadSessionRequestBody} from './createUploadSessionRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createUploadSession method.  */
export class CreateUploadSessionRequestBodyImpl implements AdditionalDataHolder, CreateUploadSessionRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The item property  */
    item?: DriveItemUploadableProperties | undefined;
    /**
     * Instantiates a new createUploadSessionRequestBody and sets the default values.
     * @param createUploadSessionRequestBodyParameterValue 
     */
    public constructor(createUploadSessionRequestBodyParameterValue?: CreateUploadSessionRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = createUploadSessionRequestBodyParameterValue?.additionalData ? {} : createUploadSessionRequestBodyParameterValue?.additionalData!
        this.item = createUploadSessionRequestBodyParameterValue?.item ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.item){
        if(this.item)
        writer.writeObjectValue<DriveItemUploadablePropertiesImpl>("item", new DriveItemUploadablePropertiesImpl(this.item));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
