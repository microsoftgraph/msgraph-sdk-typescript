import {SensitivityLabelAssignmentMethod} from '../../../../../models/sensitivityLabelAssignmentMethod';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssignSensitivityLabelPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The assignmentMethod property
     */
    assignmentMethod?: SensitivityLabelAssignmentMethod | undefined;
    /**
     * The justificationText property
     */
    justificationText?: string | undefined;
    /**
     * The sensitivityLabelId property
     */
    sensitivityLabelId?: string | undefined;
}
