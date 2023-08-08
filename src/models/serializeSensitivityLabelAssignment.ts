import type {SensitivityLabelAssignment} from './sensitivityLabelAssignment';
import {SensitivityLabelAssignmentMethod} from './sensitivityLabelAssignmentMethod';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSensitivityLabelAssignment(writer: SerializationWriter, sensitivityLabelAssignment: SensitivityLabelAssignment | undefined = {} as SensitivityLabelAssignment) : void {
        writer.writeEnumValue<SensitivityLabelAssignmentMethod>("assignmentMethod", sensitivityLabelAssignment.assignmentMethod);
        writer.writeStringValue("@odata.type", sensitivityLabelAssignment.odataType);
        writer.writeStringValue("sensitivityLabelId", sensitivityLabelAssignment.sensitivityLabelId);
        writer.writeStringValue("tenantId", sensitivityLabelAssignment.tenantId);
        writer.writeAdditionalData(sensitivityLabelAssignment.additionalData);
}
