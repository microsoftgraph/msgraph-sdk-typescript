import {IpRange} from './ipRange';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IPv6CidrRange extends IpRange, Parsable {
    /**
     * IPv6 address in CIDR notation. Not nullable.
     */
    cidrAddress?: string | undefined;
}
