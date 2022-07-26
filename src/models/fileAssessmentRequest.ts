import {ThreatAssessmentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileAssessmentRequest extends ThreatAssessmentRequest implements Parsable {
    /** Base64 encoded file content. The file content cannot fetch back because it isn't stored. */
    private _contentData?: string | undefined;
    /** The file name. */
    private _fileName?: string | undefined;
    /**
     * Instantiates a new FileAssessmentRequest and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.fileAssessmentRequest";
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
        this._contentData = value;
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
        this._fileName = value;
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
        writer.writeStringValue("contentData", this.contentData);
        writer.writeStringValue("fileName", this.fileName);
    };
}
