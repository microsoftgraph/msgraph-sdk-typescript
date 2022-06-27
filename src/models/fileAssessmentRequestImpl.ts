import {FileAssessmentRequest} from './fileAssessmentRequest';
import {ThreatAssessmentRequestImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileAssessmentRequestImpl extends ThreatAssessmentRequestImpl implements FileAssessmentRequest {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Base64 encoded file content. The file content cannot fetch back because it isn't stored. */
    public contentData?: string | undefined;
    /** The file name. */
    public fileName?: string | undefined;
    /**
     * Instantiates a new FileAssessmentRequest and sets the default values.
     * @param fileAssessmentRequestParameterValue 
     */
    public constructor(fileAssessmentRequestParameterValue?: FileAssessmentRequest | undefined) {
        super(fileAssessmentRequestParameterValue);
        this.additionalData = fileAssessmentRequestParameterValue?.additionalData ? fileAssessmentRequestParameterValue?.additionalData! : {};
        this.contentData = fileAssessmentRequestParameterValue?.contentData;
        this.fileName = fileAssessmentRequestParameterValue?.fileName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentData": n => { this.contentData = n.getStringValue(); },
            "fileName": n => { this.fileName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.contentData){
            writer.writeStringValue("contentData", this.contentData);
        }
        if(this.fileName){
            writer.writeStringValue("fileName", this.fileName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
