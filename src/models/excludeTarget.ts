import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExcludeTarget extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The object identifier of an Azure AD user or group. */
    id?: string | undefined;
    /** The type of the authentication method target. Possible values are: user, group, unknownFutureValue. */
    targetType?: AuthenticationMethodTargetType | undefined;
}
