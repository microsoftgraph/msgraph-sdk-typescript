import {SensitivityLabelAssignmentMethod} from '../../../../../models/sensitivityLabelAssignmentMethod';
import type {AssignSensitivityLabelPostRequestBody} from './assignSensitivityLabelPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignSensitivityLabelPostRequestBody(writer: SerializationWriter, assignSensitivityLabelPostRequestBody: AssignSensitivityLabelPostRequestBody | undefined = {} as AssignSensitivityLabelPostRequestBody) : void {
        writer.writeEnumValue<SensitivityLabelAssignmentMethod>("assignmentMethod", assignSensitivityLabelPostRequestBody.assignmentMethod);
        writer.writeStringValue("justificationText", assignSensitivityLabelPostRequestBody.justificationText);
        writer.writeStringValue("sensitivityLabelId", assignSensitivityLabelPostRequestBody.sensitivityLabelId);
        writer.writeAdditionalData(assignSensitivityLabelPostRequestBody.additionalData);
}
