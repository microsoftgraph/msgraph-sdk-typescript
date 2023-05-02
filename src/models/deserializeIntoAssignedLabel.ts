import {AssignedLabel} from './assignedLabel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedLabel(assignedLabel: AssignedLabel | undefined = {} as AssignedLabel) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { assignedLabel.displayName = n.getStringValue(); },
        "labelId": n => { assignedLabel.labelId = n.getStringValue(); },
        "@odata.type": n => { assignedLabel.odataType = n.getStringValue(); },
    }
}
