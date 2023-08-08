import {TrainingStatus} from './trainingStatus';
import type {UserTrainingStatusInfo} from './userTrainingStatusInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserTrainingStatusInfo(writer: SerializationWriter, userTrainingStatusInfo: UserTrainingStatusInfo | undefined = {} as UserTrainingStatusInfo) : void {
        writer.writeDateValue("assignedDateTime", userTrainingStatusInfo.assignedDateTime);
        writer.writeDateValue("completionDateTime", userTrainingStatusInfo.completionDateTime);
        writer.writeStringValue("displayName", userTrainingStatusInfo.displayName);
        writer.writeStringValue("@odata.type", userTrainingStatusInfo.odataType);
        writer.writeEnumValue<TrainingStatus>("trainingStatus", userTrainingStatusInfo.trainingStatus);
        writer.writeAdditionalData(userTrainingStatusInfo.additionalData);
}
