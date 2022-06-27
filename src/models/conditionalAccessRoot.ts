import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {Entity} from './entity';
import {NamedLocation} from './namedLocation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessRoot extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Read-only. Nullable. Returns a collection of the specified named locations. */
    namedLocations?: NamedLocation[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access policies. */
    policies?: ConditionalAccessPolicy[] | undefined;
}
