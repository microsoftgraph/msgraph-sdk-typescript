import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodTarget extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Determines if the user is enforced to register the authentication method. */
    isRegistrationRequired?: boolean | undefined;
    /** Possible values are: user, group, and unknownFutureValue. */
    targetType?: AuthenticationMethodTargetType | undefined;
}
