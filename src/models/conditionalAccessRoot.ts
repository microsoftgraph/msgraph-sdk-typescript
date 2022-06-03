import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {Entity} from './entity';
import {NamedLocation} from './namedLocation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessRoot extends Entity, Partial<Parsable> {
    /** Read-only. Nullable. Returns a collection of the specified named locations. */
    namedLocations?: NamedLocation[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access policies. */
    policies?: ConditionalAccessPolicy[] | undefined;
}
