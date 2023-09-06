import { type AssignmentOrder } from '../../../../../models/assignmentOrder';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SetOrderPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The newAssignmentOrder property
     */
    newAssignmentOrder?: AssignmentOrder | undefined;
}
