import {EducationExternalResource} from './educationExternalResource';
import {EducationResourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationExternalResourceImpl extends EducationResourceImpl implements EducationExternalResource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Location of the resource. Required. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new EducationExternalResource and sets the default values.
     * @param educationExternalResourceParameterValue 
     */
    public constructor(educationExternalResourceParameterValue?: EducationExternalResource | undefined) {
        super(educationExternalResourceParameterValue);
        this.additionalData = educationExternalResourceParameterValue?.additionalData ? educationExternalResourceParameterValue?.additionalData! : {};
        this.webUrl = educationExternalResourceParameterValue?.webUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
