import { SensitivityLabelAssignmentMethod } from '../../../../../models/sensitivityLabelAssignmentMethod';
import { type AssignSensitivityLabelPostRequestBody } from './assignSensitivityLabelPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignSensitivityLabelPostRequestBody(assignSensitivityLabelPostRequestBody: AssignSensitivityLabelPostRequestBody | undefined = {} as AssignSensitivityLabelPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "assignmentMethod": n => { assignSensitivityLabelPostRequestBody.assignmentMethod = n.getEnumValue<SensitivityLabelAssignmentMethod>(SensitivityLabelAssignmentMethod); },
        "justificationText": n => { assignSensitivityLabelPostRequestBody.justificationText = n.getStringValue(); },
        "sensitivityLabelId": n => { assignSensitivityLabelPostRequestBody.sensitivityLabelId = n.getStringValue(); },
    }
}
