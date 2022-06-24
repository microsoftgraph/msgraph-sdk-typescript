import {createIpRangeFromDiscriminatorValue} from './createIpRangeFromDiscriminatorValue';
import {IpRangeImpl, NamedLocationImpl} from './index';
import {IpNamedLocation} from './ipNamedLocation';
import {IpRange} from './ipRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IpNamedLocationImpl extends NamedLocationImpl implements IpNamedLocation {
    /** List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596. Required. */
    public ipRanges?: IpRange[] | undefined;
    /** true if this location is explicitly trusted. Optional. Default value is false. */
    public isTrusted?: boolean | undefined;
    /**
     * Instantiates a new IpNamedLocation and sets the default values.
     * @param ipNamedLocationParameterValue 
     */
    public constructor(ipNamedLocationParameterValue?: IpNamedLocation | undefined) {
        super(ipNamedLocationParameterValue);
        const ipRangesArrValue: IpRangeImpl[] = []; ipNamedLocationParameterValue.ipRanges?.forEach(element => {ipRangesArrValue.push(element instanceof IpRangeImpl? element : new IpRangeImpl(element));});
        this.ipRanges = ipRangesArrValue;
        this.isTrusted = ipNamedLocationParameterValue?.isTrusted;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "ipRanges": n => { this.ipRanges = n.getCollectionOfObjectValues<IpRangeImpl>(createIpRangeFromDiscriminatorValue); },
            "isTrusted": n => { this.isTrusted = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.ipRanges && this.ipRanges.length != 0){        const ipRangesArrValue: IpRangeImpl[] = []; this.ipRanges?.forEach(element => {ipRangesArrValue.push(element instanceof IpRangeImpl? element : new IpRangeImpl(element));});
            writer.writeCollectionOfObjectValues<IpRangeImpl>("ipRanges", ipRangesArrValue);
        }
        if(this.isTrusted){
            writer.writeBooleanValue("isTrusted", this.isTrusted);
        }
    };
}
