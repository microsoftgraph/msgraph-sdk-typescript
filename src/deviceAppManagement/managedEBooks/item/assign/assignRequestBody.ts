import {ManagedEBookAssignment} from '../../../../models/managedEBookAssignment';

export interface AssignRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The managedEBookAssignments property  */
    managedEBookAssignments?: ManagedEBookAssignment[] | undefined;
}
