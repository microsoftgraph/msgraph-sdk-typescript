import {AssignmentOrder} from '../../../../../models/assignmentOrder';

export interface SetOrderPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The newAssignmentOrder property */
    newAssignmentOrder?:AssignmentOrder | undefined;
}
