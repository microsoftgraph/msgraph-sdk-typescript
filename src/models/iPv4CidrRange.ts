import { type IpRange } from './ipRange';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface IPv4CidrRange extends IpRange, Parsable {
    /**
     * IPv4 address in CIDR notation. Not nullable.
     */
    cidrAddress?: string | undefined;
}
