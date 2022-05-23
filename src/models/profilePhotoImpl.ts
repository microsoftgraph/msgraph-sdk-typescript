import {EntityImpl} from './index';
import {ProfilePhoto} from './profilePhoto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ProfilePhotoImpl extends EntityImpl implements Parsable, ProfilePhoto {
    /** The height of the photo. Read-only. */
    public height?: number | undefined;
    /** The width of the photo. Read-only. */
    public width?: number | undefined;
    /**
     * Instantiates a new profilePhoto and sets the default values.
     * @param profilePhotoParameterValue 
     */
    public constructor(profilePhotoParameterValue?: ProfilePhoto | undefined) {
        super();
        this.height = profilePhotoParameterValue?.height ;
        this.width = profilePhotoParameterValue?.width ;
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
    };
}
