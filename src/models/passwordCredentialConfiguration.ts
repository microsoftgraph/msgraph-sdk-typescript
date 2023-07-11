import {AppCredentialRestrictionType} from './appCredentialRestrictionType';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordCredentialConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The maxLifetime property
     */
    maxLifetime?: Duration | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Enforces the policy for an app created on or after the enforcement date. For existing applications, the enforcement date would be back dated. To apply to all applications, enforcement datetime would be null.
     */
    restrictForAppsCreatedAfterDateTime?: Date | undefined;
    /**
     * The type of restriction being applied. The possible values are: passwordAddition, passwordLifetime, symmetricKeyAddition, symmetricKeyLifetime,customPasswordAddition, unknownFutureValue. Each value of restrictionType can be used only once per policy.
     */
    restrictionType?: AppCredentialRestrictionType | undefined;
}
