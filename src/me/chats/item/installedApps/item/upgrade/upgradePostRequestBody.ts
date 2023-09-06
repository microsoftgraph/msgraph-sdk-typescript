import { type TeamsAppPermissionSet } from '../../../../../../models/teamsAppPermissionSet';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface UpgradePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The consentedPermissionSet property
     */
    consentedPermissionSet?: TeamsAppPermissionSet | undefined;
}
