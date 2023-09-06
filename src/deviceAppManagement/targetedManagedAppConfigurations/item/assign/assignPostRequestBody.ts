import { type TargetedManagedAppPolicyAssignment } from '../../../../models/targetedManagedAppPolicyAssignment';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AssignPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The assignments property
     */
    assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
}
