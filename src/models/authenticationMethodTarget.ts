import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodTarget extends Entity, Partial<Parsable> {
    /** Determines if the user is enforced to register the authentication method. */
    isRegistrationRequired?: boolean | undefined;
    /** Possible values are: user, group, and unknownFutureValue. */
    targetType?: AuthenticationMethodTargetType | undefined;
}
