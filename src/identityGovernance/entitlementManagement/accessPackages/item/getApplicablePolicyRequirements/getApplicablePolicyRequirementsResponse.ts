import {AccessPackageAssignmentRequestRequirements} from '../../../../../models/accessPackageAssignmentRequestRequirements';

export interface GetApplicablePolicyRequirementsResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The value property */
    value?:AccessPackageAssignmentRequestRequirements[] | undefined;
}
