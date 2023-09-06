import { type AssignedTrainingInfo } from './assignedTrainingInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedTrainingInfo(assignedTrainingInfo: AssignedTrainingInfo | undefined = {} as AssignedTrainingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedUserCount": n => { assignedTrainingInfo.assignedUserCount = n.getNumberValue(); },
        "completedUserCount": n => { assignedTrainingInfo.completedUserCount = n.getNumberValue(); },
        "displayName": n => { assignedTrainingInfo.displayName = n.getStringValue(); },
        "@odata.type": n => { assignedTrainingInfo.odataType = n.getStringValue(); },
    }
}
