import {DomainDnsRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsCnameRecord extends DomainDnsRecord implements Parsable {
    /** The canonical name of the CNAME record. Used to configure the CNAME record at the DNS host. */
    private _canonicalName?: string | undefined;
    /**
     * Gets the canonicalName property value. The canonical name of the CNAME record. Used to configure the CNAME record at the DNS host.
     * @returns a string
     */
    public get canonicalName() {
        return this._canonicalName;
    };
    /**
     * Sets the canonicalName property value. The canonical name of the CNAME record. Used to configure the CNAME record at the DNS host.
     * @param value Value to set for the canonicalName property.
     */
    public set canonicalName(value: string | undefined) {
        this._canonicalName = value;
    };
    /**
     * Instantiates a new DomainDnsCnameRecord and sets the default values.
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
            "canonicalName": n => { this.canonicalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("canonicalName", this.canonicalName);
    };
}
