import {IpRange} from './ipRange';
import {NamedLocation} from './namedLocation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IpNamedLocation extends NamedLocation, Parsable {
    /**
     * List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC5969. Required.
     */
    ipRanges?: IpRange[] | undefined;
    /**
     * true if this location is explicitly trusted. Optional. Default value is false.
     */
    isTrusted?: boolean | undefined;
}
