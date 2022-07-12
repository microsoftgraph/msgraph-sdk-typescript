import {EducationResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationLinkResource extends EducationResource implements Parsable {
    /** URL to the resource. */
    private _link?: string | undefined;
    /**
     * Instantiates a new EducationLinkResource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "link": n => { this.link = n.getStringValue(); },
        };
    };
    /**
     * Gets the link property value. URL to the resource.
     * @returns a string
     */
    public get link() {
        return this._link;
    };
    /**
     * Sets the link property value. URL to the resource.
     * @param value Value to set for the link property.
     */
    public set link(value: string | undefined) {
        this._link = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("link", this.link);
    };
}
