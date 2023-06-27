import {IpRange} from './ipRange';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IPv4Range extends IpRange, Parsable {
    /**
     * Lower address.
     */
    lowerAddress?: string | undefined;
    /**
     * Upper address.
     */
    upperAddress?: string | undefined;
}
