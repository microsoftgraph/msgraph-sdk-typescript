import type {Entity} from './entity';
import type {UserRegistrationDetails} from './userRegistrationDetails';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsRoot extends Entity, Parsable {
    /**
     * Represents the state of a user's authentication methods, including which methods are registered and which features the user is registered and capable of (such as multi-factor authentication, self-service password reset, and passwordless authentication).
     */
    userRegistrationDetails?: UserRegistrationDetails[] | undefined;
}
