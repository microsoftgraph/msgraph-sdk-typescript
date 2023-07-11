import {SensitivityLabelAssignment} from './sensitivityLabelAssignment';
import {SensitivityLabelAssignmentMethod} from './sensitivityLabelAssignmentMethod';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSensitivityLabelAssignment(sensitivityLabelAssignment: SensitivityLabelAssignment | undefined = {} as SensitivityLabelAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        "assignmentMethod": n => { sensitivityLabelAssignment.assignmentMethod = n.getEnumValue<SensitivityLabelAssignmentMethod>(SensitivityLabelAssignmentMethod); },
        "@odata.type": n => { sensitivityLabelAssignment.odataType = n.getStringValue(); },
        "sensitivityLabelId": n => { sensitivityLabelAssignment.sensitivityLabelId = n.getStringValue(); },
        "tenantId": n => { sensitivityLabelAssignment.tenantId = n.getStringValue(); },
    }
}
