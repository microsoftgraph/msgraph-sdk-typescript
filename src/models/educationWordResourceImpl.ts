import {EducationWordResource} from './educationWordResource';
import {EducationResourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationWordResourceImpl extends EducationResourceImpl implements EducationWordResource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Location of the file on disk. */
    public fileUrl?: string | undefined;
    /**
     * Instantiates a new EducationWordResource and sets the default values.
     * @param educationWordResourceParameterValue 
     */
    public constructor(educationWordResourceParameterValue?: EducationWordResource | undefined) {
        super(educationWordResourceParameterValue);
        this.additionalData = educationWordResourceParameterValue?.additionalData ? educationWordResourceParameterValue?.additionalData! : {};
        this.fileUrl = educationWordResourceParameterValue?.fileUrl;
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
