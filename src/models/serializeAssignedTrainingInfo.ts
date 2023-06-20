import {AssignedTrainingInfo} from './assignedTrainingInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedTrainingInfo(assignedTrainingInfo: AssignedTrainingInfo | undefined = {} as AssignedTrainingInfo, writer: SerializationWriter) : void {
        writer.writeNumberValue("assignedUserCount", assignedTrainingInfo.assignedUserCount);
        writer.writeNumberValue("completedUserCount", assignedTrainingInfo.completedUserCount);
        writer.writeStringValue("displayName", assignedTrainingInfo.displayName);
        writer.writeStringValue("@odata.type", assignedTrainingInfo.odataType);
        writer.writeAdditionalData(assignedTrainingInfo.additionalData);
}
