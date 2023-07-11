import {AppKeyCredentialRestrictionType} from './appKeyCredentialRestrictionType';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface KeyCredentialConfiguration extends AdditionalDataHolder, Parsable {
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
     * Timestamp when the policy is enforced for all apps created on or after the specified date. For existing applications, the enforcement date would be back dated. To apply to all applications regardless of their creation date, this property would be null. Nullable.
     */
    restrictForAppsCreatedAfterDateTime?: Date | undefined;
    /**
     * The type of restriction being applied. Possible values are asymmetricKeyLifetime, unknownFutureValue. Each value of restrictionType can be used only once per policy.
     */
    restrictionType?: AppKeyCredentialRestrictionType | undefined;
}
