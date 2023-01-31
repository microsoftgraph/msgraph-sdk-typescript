import {AttachmentBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TaskFileAttachment extends AttachmentBase implements Parsable {
    private _contentBytes?: string | undefined;
    /**
     * Instantiates a new TaskFileAttachment and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.taskFileAttachment";
    };
    /**
     * Gets the contentBytes property value. 
     * @returns a binary
     */
    public get contentBytes() {
        return this._contentBytes;
    };
    /**
     * Sets the contentBytes property value. 
     * @param value Value to set for the contentBytes property.
     */
    public set contentBytes(value: string | undefined) {
        this._contentBytes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentBytes": n => { this.contentBytes = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("contentBytes", this.contentBytes);
    };
}
