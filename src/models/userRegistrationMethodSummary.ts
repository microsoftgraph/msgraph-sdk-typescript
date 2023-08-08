import {IncludedUserRoles} from './includedUserRoles';
import {IncludedUserTypes} from './includedUserTypes';
import type {UserRegistrationMethodCount} from './userRegistrationMethodCount';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserRegistrationMethodSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Total number of users in the tenant.
     */
    totalUserCount?: number | undefined;
    /**
     * Number of users registered for each authentication method.
     */
    userRegistrationMethodCounts?: UserRegistrationMethodCount[] | undefined;
    /**
     * The role type of the user. Possible values are: all, privilegedAdmin, admin, user, unknownFutureValue.
     */
    userRoles?: IncludedUserRoles | undefined;
    /**
     * User type. Possible values are: all, member, guest, unknownFutureValue.
     */
    userTypes?: IncludedUserTypes | undefined;
}
