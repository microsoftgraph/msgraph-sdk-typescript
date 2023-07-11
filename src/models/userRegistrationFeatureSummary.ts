import {IncludedUserRoles} from './includedUserRoles';
import {IncludedUserTypes} from './includedUserTypes';
import {UserRegistrationFeatureCount} from './userRegistrationFeatureCount';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserRegistrationFeatureSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Total number of users accounts, excluding those that are blocked.
     */
    totalUserCount?: number | undefined;
    /**
     * Number of users registered or capable for multi-factor authentication, self-service password reset, and passwordless authentication.
     */
    userRegistrationFeatureCounts?: UserRegistrationFeatureCount[] | undefined;
    /**
     * The role type of the user. Possible values are: all, privilegedAdmin, admin, user, unknownFutureValue.
     */
    userRoles?: IncludedUserRoles | undefined;
    /**
     * User type. Possible values are: all, member, guest, unknownFutureValue.
     */
    userTypes?: IncludedUserTypes | undefined;
}
