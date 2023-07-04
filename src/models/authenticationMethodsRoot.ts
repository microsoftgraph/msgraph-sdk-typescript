import {Entity} from './entity';
import {UserRegistrationDetails} from './userRegistrationDetails';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsRoot extends Entity, Parsable {
    /**
     * The userRegistrationDetails property
     */
    userRegistrationDetails?: UserRegistrationDetails[] | undefined;
}
