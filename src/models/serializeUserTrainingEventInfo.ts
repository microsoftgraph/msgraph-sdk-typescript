import { serializeUserTrainingContentEventInfo } from './serializeUserTrainingContentEventInfo';
import { TrainingStatus } from './trainingStatus';
import { type UserTrainingContentEventInfo } from './userTrainingContentEventInfo';
import { type UserTrainingEventInfo } from './userTrainingEventInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserTrainingEventInfo(writer: SerializationWriter, userTrainingEventInfo: UserTrainingEventInfo | undefined = {} as UserTrainingEventInfo) : void {
        writer.writeStringValue("displayName", userTrainingEventInfo.displayName);
        writer.writeEnumValue<TrainingStatus>("latestTrainingStatus", userTrainingEventInfo.latestTrainingStatus);
        writer.writeStringValue("@odata.type", userTrainingEventInfo.odataType);
        writer.writeObjectValue<UserTrainingContentEventInfo>("trainingAssignedProperties", userTrainingEventInfo.trainingAssignedProperties, serializeUserTrainingContentEventInfo);
        writer.writeObjectValue<UserTrainingContentEventInfo>("trainingCompletedProperties", userTrainingEventInfo.trainingCompletedProperties, serializeUserTrainingContentEventInfo);
        writer.writeObjectValue<UserTrainingContentEventInfo>("trainingUpdatedProperties", userTrainingEventInfo.trainingUpdatedProperties, serializeUserTrainingContentEventInfo);
        writer.writeAdditionalData(userTrainingEventInfo.additionalData);
}
