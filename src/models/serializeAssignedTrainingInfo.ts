import type {AssignedTrainingInfo} from './assignedTrainingInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedTrainingInfo(writer: SerializationWriter, assignedTrainingInfo: AssignedTrainingInfo | undefined = {} as AssignedTrainingInfo) : void {
        writer.writeNumberValue("assignedUserCount", assignedTrainingInfo.assignedUserCount);
        writer.writeNumberValue("completedUserCount", assignedTrainingInfo.completedUserCount);
        writer.writeStringValue("displayName", assignedTrainingInfo.displayName);
        writer.writeStringValue("@odata.type", assignedTrainingInfo.odataType);
        writer.writeAdditionalData(assignedTrainingInfo.additionalData);
}
