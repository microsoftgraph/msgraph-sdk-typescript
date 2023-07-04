import {AuthenticationContextClassReference} from './authenticationContextClassReference';
import {AuthenticationStrengthRoot} from './authenticationStrengthRoot';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import {Entity} from './entity';
import {NamedLocation} from './namedLocation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessRoot extends Entity, Parsable {
    /**
     * Read-only. Nullable. Returns a collection of the specified authentication context class references.
     */
    authenticationContextClassReferences?: AuthenticationContextClassReference[] | undefined;
    /**
     * The authenticationStrength property
     */
    authenticationStrength?: AuthenticationStrengthRoot | undefined;
    /**
     * Read-only. Nullable. Returns a collection of the specified named locations.
     */
    namedLocations?: NamedLocation[] | undefined;
    /**
     * Read-only. Nullable. Returns a collection of the specified Conditional Access (CA) policies.
     */
    policies?: ConditionalAccessPolicy[] | undefined;
    /**
     * Read-only. Nullable. Returns a collection of the specified Conditional Access templates.
     */
    templates?: ConditionalAccessTemplate[] | undefined;
}
