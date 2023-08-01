import type {AuthenticationContextClassReference} from './authenticationContextClassReference';
import type {AuthenticationStrengthRoot} from './authenticationStrengthRoot';
import type {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import type {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import type {Entity} from './entity';
import type {NamedLocation} from './namedLocation';
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
