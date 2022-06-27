import {IpRange} from './ipRange';
import {NamedLocation} from './namedLocation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IpNamedLocation extends Partial<AdditionalDataHolder>, NamedLocation, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596. Required. */
    ipRanges?: IpRange[] | undefined;
    /** true if this location is explicitly trusted. Optional. Default value is false. */
    isTrusted?: boolean | undefined;
}
