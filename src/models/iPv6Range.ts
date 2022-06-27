import {IpRange} from './ipRange';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IPv6Range extends Partial<AdditionalDataHolder>, IpRange, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Lower address. */
    lowerAddress?: string | undefined;
    /** Upper address. */
    upperAddress?: string | undefined;
}
