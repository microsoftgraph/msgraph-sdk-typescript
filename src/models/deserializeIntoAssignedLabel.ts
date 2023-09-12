import { type AssignedLabel } from './assignedLabel';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedLabel(assignedLabel: AssignedLabel | undefined = {} as AssignedLabel) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { assignedLabel.displayName = n.getStringValue(); },
        "labelId": n => { assignedLabel.labelId = n.getStringValue(); },
        "@odata.type": n => { assignedLabel.odataType = n.getStringValue(); },
    }
}
