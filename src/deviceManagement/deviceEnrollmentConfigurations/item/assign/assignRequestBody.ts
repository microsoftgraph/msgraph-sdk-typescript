import {EnrollmentConfigurationAssignment} from '../../../../models/enrollmentConfigurationAssignment';

export interface AssignRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The enrollmentConfigurationAssignments property  */
    enrollmentConfigurationAssignments?: EnrollmentConfigurationAssignment[] | undefined;
}
