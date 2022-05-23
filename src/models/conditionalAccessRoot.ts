import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {Entity} from './entity';
import {NamedLocation} from './namedLocation';

export interface ConditionalAccessRoot extends Entity{
    /** Read-only. Nullable. Returns a collection of the specified named locations. */
    namedLocations?:NamedLocation[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access policies. */
    policies?:ConditionalAccessPolicy[] | undefined;
}
