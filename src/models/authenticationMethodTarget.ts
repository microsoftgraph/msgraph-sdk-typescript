import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodTarget extends Entity, Parsable {
    /**
     * Determines if the user is enforced to register the authentication method.
     */
    isRegistrationRequired?: boolean | undefined;
    /**
     * The targetType property
     */
    targetType?: AuthenticationMethodTargetType | undefined;
}
