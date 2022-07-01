import {createIpRangeFromDiscriminatorValue} from './createIpRangeFromDiscriminatorValue';
import {IpRangeImpl, NamedLocationImpl} from './index';
import {IpNamedLocation} from './ipNamedLocation';
import {IpRange} from './ipRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IpNamedLocationImpl extends NamedLocationImpl implements IpNamedLocation {
    /** List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596. Required. */
    private _ipRanges?: IpRange[] | undefined;
    /** true if this location is explicitly trusted. Optional. Default value is false. */
    private _isTrusted?: boolean | undefined;
    /**
     * Instantiates a new IpNamedLocation and sets the default values.
     * @param ipNamedLocationParameterValue 
     */
    public constructor(ipNamedLocationParameterValue?: IpNamedLocation | undefined) {
        super(ipNamedLocationParameterValue);
        this._ipRanges = ipNamedLocationParameterValue?.ipRanges;
        this._isTrusted = ipNamedLocationParameterValue?.isTrusted;
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
     * Gets the ipRanges property value. List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596. Required.
     * @returns a IpRangeInterface
     */
    public get ipRanges() {
        return this._ipRanges;
    };
    /**
     * Sets the ipRanges property value. List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596. Required.
     * @param value Value to set for the ipRanges property.
     */
    public set ipRanges(value: IpRange[] | undefined) {
        if(value) {
            const ipRangesArrValue: IpRangeImpl[] = [];
            this.ipRanges?.forEach(element => {
                ipRangesArrValue.push((element instanceof IpRangeImpl? element as IpRangeImpl:new IpRangeImpl(element)));
            });
            this._ipRanges = ipRangesArrValue;
        }
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
        if(value) {
            this._isTrusted = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.ipRanges && this.ipRanges.length != 0){        const ipRangesArrValue: IpRangeImpl[] = [];
        this.ipRanges?.forEach(element => {
            ipRangesArrValue.push((element instanceof IpRangeImpl? element as IpRangeImpl:new IpRangeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IpRangeImpl>("ipRanges", ipRangesArrValue);
        }
        if(this.isTrusted){
            writer.writeBooleanValue("isTrusted", this.isTrusted);
        }
    };
}
