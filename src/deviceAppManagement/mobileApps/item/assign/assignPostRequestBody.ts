import {MobileAppAssignment} from '../../../../models/mobileAppAssignment';

export interface AssignPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The mobileAppAssignments property */
    mobileAppAssignments?:MobileAppAssignment[] | undefined;
}
