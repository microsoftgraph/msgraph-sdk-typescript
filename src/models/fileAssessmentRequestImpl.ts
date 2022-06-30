import {FileAssessmentRequest} from './fileAssessmentRequest';
import {ThreatAssessmentRequestImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileAssessmentRequestImpl extends ThreatAssessmentRequestImpl implements FileAssessmentRequest {
    /** Base64 encoded file content. The file content cannot fetch back because it isn't stored. */
    private _contentData?: string | undefined;
    /** The file name. */
    private _fileName?: string | undefined;
    /**
     * Instantiates a new FileAssessmentRequest and sets the default values.
     * @param fileAssessmentRequestParameterValue 
     */
    public constructor(fileAssessmentRequestParameterValue?: FileAssessmentRequest | undefined) {
        super(fileAssessmentRequestParameterValue);
        this._contentData = fileAssessmentRequestParameterValue?.contentData;
        this._fileName = fileAssessmentRequestParameterValue?.fileName;
    };
    /**
     * Gets the contentData property value. Base64 encoded file content. The file content cannot fetch back because it isn't stored.
     * @returns a string
     */
    public get contentData() {
        return this._contentData;
    };
    /**
     * Sets the contentData property value. Base64 encoded file content. The file content cannot fetch back because it isn't stored.
     * @param value Value to set for the contentData property.
     */
    public set contentData(value: string | undefined) {
        if(value) {
            this._contentData = value;
        }
    };
    /**
     * Gets the fileName property value. The file name.
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Sets the fileName property value. The file name.
     * @param value Value to set for the fileName property.
     */
    public set fileName(value: string | undefined) {
        if(value) {
            this._fileName = value;
        }
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
    };
}
