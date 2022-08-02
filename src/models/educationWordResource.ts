import {EducationResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationWordResource extends EducationResource implements Parsable {
    /** Location of the file on disk. */
    private _fileUrl?: string | undefined;
    /**
     * Instantiates a new EducationWordResource and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.educationWordResource";
    };
    /**
     * Gets the fileUrl property value. Location of the file on disk.
     * @returns a string
     */
    public get fileUrl() {
        return this._fileUrl;
    };
    /**
     * Sets the fileUrl property value. Location of the file on disk.
     * @param value Value to set for the fileUrl property.
     */
    public set fileUrl(value: string | undefined) {
        this._fileUrl = value;
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
        writer.writeStringValue("fileUrl", this.fileUrl);
    };
}
