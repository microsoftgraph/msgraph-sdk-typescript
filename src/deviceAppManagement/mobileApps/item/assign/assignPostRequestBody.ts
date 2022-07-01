import {MobileAppAssignment} from '../../../../models/mobileAppAssignment';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssignPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The mobileAppAssignments property */
    mobileAppAssignments?: MobileAppAssignment[] | undefined;
}
