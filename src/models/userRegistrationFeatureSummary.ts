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
     * The totalUserCount property
     */
    totalUserCount?: number | undefined;
    /**
     * The userRegistrationFeatureCounts property
     */
    userRegistrationFeatureCounts?: UserRegistrationFeatureCount[] | undefined;
    /**
     * The userRoles property
     */
    userRoles?: IncludedUserRoles | undefined;
    /**
     * The userTypes property
     */
    userTypes?: IncludedUserTypes | undefined;
}
