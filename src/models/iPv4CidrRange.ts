import {IpRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IPv4CidrRange extends IpRange implements Parsable {
    /** IPv4 address in CIDR notation. Not nullable. */
    private _cidrAddress?: string | undefined;
    /**
     * Gets the cidrAddress property value. IPv4 address in CIDR notation. Not nullable.
     * @returns a string
     */
    public get cidrAddress() {
        return this._cidrAddress;
    };
    /**
     * Sets the cidrAddress property value. IPv4 address in CIDR notation. Not nullable.
     * @param value Value to set for the cidrAddress property.
     */
    public set cidrAddress(value: string | undefined) {
        this._cidrAddress = value;
    };
    /**
     * Instantiates a new IPv4CidrRange and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iPv4CidrRange";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "cidrAddress": n => { this.cidrAddress = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("cidrAddress", this.cidrAddress);
    };
}
