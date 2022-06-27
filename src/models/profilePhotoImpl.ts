import {EntityImpl} from './index';
import {ProfilePhoto} from './profilePhoto';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class ProfilePhotoImpl extends EntityImpl implements ProfilePhoto {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The height of the photo. Read-only. */
    public height?: number | undefined;
    /** The width of the photo. Read-only. */
    public width?: number | undefined;
    /**
     * Instantiates a new profilePhoto and sets the default values.
     * @param profilePhotoParameterValue 
     */
    public constructor(profilePhotoParameterValue?: ProfilePhoto | undefined) {
        super(profilePhotoParameterValue);
        this.additionalData = profilePhotoParameterValue?.additionalData ? profilePhotoParameterValue?.additionalData! : {};
        this.height = profilePhotoParameterValue?.height;
        this.width = profilePhotoParameterValue?.width;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "height": n => { this.height = n.getNumberValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.height){
            writer.writeNumberValue("height", this.height);
        }
        if(this.width){
            writer.writeNumberValue("width", this.width);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
