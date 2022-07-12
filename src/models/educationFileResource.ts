import {EducationResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFileResource extends EducationResource implements Parsable {
    /** Location on disk of the file resource. */
    private _fileUrl?: string | undefined;
    /**
     * Instantiates a new EducationFileResource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fileUrl property value. Location on disk of the file resource.
     * @returns a string
     */
    public get fileUrl() {
        return this._fileUrl;
    };
    /**
     * Sets the fileUrl property value. Location on disk of the file resource.
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
