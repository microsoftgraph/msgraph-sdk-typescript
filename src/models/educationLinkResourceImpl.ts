import {EducationLinkResource} from './educationLinkResource';
import {EducationResourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationLinkResourceImpl extends EducationResourceImpl implements EducationLinkResource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** URL to the resource. */
    public link?: string | undefined;
    /**
     * Instantiates a new EducationLinkResource and sets the default values.
     * @param educationLinkResourceParameterValue 
     */
    public constructor(educationLinkResourceParameterValue?: EducationLinkResource | undefined) {
        super(educationLinkResourceParameterValue);
        this.additionalData = educationLinkResourceParameterValue?.additionalData ? educationLinkResourceParameterValue?.additionalData! : {};
        this.link = educationLinkResourceParameterValue?.link;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "link": n => { this.link = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.link){
            writer.writeStringValue("link", this.link);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
