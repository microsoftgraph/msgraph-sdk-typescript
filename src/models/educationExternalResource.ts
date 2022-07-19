import {EducationResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationExternalResource extends EducationResource implements Parsable {
    /** Location of the resource. Required. */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new EducationExternalResource and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.educationExternalResource";
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
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the webUrl property value. Location of the resource. Required.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Location of the resource. Required.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
