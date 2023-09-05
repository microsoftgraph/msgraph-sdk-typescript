import { type MobileAppAssignment } from '../../../../models/mobileAppAssignment';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AssignPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The mobileAppAssignments property
     */
    mobileAppAssignments?: MobileAppAssignment[] | undefined;
}
