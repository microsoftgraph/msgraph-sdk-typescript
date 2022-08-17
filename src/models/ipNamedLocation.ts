import {createIpRangeFromDiscriminatorValue} from './createIpRangeFromDiscriminatorValue';
import {IpRange, NamedLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IpNamedLocation extends NamedLocation implements Parsable {
    /** List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596. Required. */
    private _ipRanges?: IpRange[] | undefined;
    /** true if this location is explicitly trusted. Optional. Default value is false. */
    private _isTrusted?: boolean | undefined;
    /**
     * Instantiates a new IpNamedLocation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.ipNamedLocation";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "ipRanges": n => { this.ipRanges = n.getCollectionOfObjectValues<IpRange>(createIpRangeFromDiscriminatorValue); },
            "isTrusted": n => { this.isTrusted = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the ipRanges property value. List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596. Required.
     * @returns a ipRange
     */
    public get ipRanges() {
        return this._ipRanges;
    };
    /**
     * Sets the ipRanges property value. List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596. Required.
     * @param value Value to set for the ipRanges property.
     */
    public set ipRanges(value: IpRange[] | undefined) {
        this._ipRanges = value;
    };
    /**
     * Gets the isTrusted property value. true if this location is explicitly trusted. Optional. Default value is false.
     * @returns a boolean
     */
    public get isTrusted() {
        return this._isTrusted;
    };
    /**
     * Sets the isTrusted property value. true if this location is explicitly trusted. Optional. Default value is false.
     * @param value Value to set for the isTrusted property.
     */
    public set isTrusted(value: boolean | undefined) {
        this._isTrusted = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<IpRange>("ipRanges", this.ipRanges);
        writer.writeBooleanValue("isTrusted", this.isTrusted);
    };
}
