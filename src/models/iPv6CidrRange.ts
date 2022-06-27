import {IpRange} from './ipRange';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IPv6CidrRange extends Partial<AdditionalDataHolder>, IpRange, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** IPv6 address in CIDR notation. Not nullable. */
    cidrAddress?: string | undefined;
}
