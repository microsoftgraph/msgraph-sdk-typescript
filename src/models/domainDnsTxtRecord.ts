import {DomainDnsRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsTxtRecord extends DomainDnsRecord implements Parsable {
    /** Value used when configuring the text property at the DNS host. */
    private _text?: string | undefined;
    /**
     * Instantiates a new DomainDnsTxtRecord and sets the default values.
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
            "text": n => { this.text = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("text", this.text);
    };
    /**
     * Gets the text property value. Value used when configuring the text property at the DNS host.
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. Value used when configuring the text property at the DNS host.
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
}
