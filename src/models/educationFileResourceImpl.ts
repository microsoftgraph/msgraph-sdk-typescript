import {EducationFileResource} from './educationFileResource';
import {EducationResourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFileResourceImpl extends EducationResourceImpl implements EducationFileResource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Location on disk of the file resource. */
    public fileUrl?: string | undefined;
    /**
     * Instantiates a new EducationFileResource and sets the default values.
     * @param educationFileResourceParameterValue 
     */
    public constructor(educationFileResourceParameterValue?: EducationFileResource | undefined) {
        super(educationFileResourceParameterValue);
        this.additionalData = educationFileResourceParameterValue?.additionalData ? educationFileResourceParameterValue?.additionalData! : {};
        this.fileUrl = educationFileResourceParameterValue?.fileUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fileUrl": n => { this.fileUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fileUrl){
            writer.writeStringValue("fileUrl", this.fileUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
