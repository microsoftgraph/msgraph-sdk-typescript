import {createUserTrainingContentEventInfoFromDiscriminatorValue} from './createUserTrainingContentEventInfoFromDiscriminatorValue';
import {serializeUserTrainingContentEventInfo} from './serializeUserTrainingContentEventInfo';
import {TrainingStatus} from './trainingStatus';
import {UserTrainingContentEventInfo} from './userTrainingContentEventInfo';
import {UserTrainingEventInfo} from './userTrainingEventInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTrainingEventInfo(userTrainingEventInfo: UserTrainingEventInfo | undefined = {} as UserTrainingEventInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { userTrainingEventInfo.displayName = n.getStringValue(); },
        "latestTrainingStatus": n => { userTrainingEventInfo.latestTrainingStatus = n.getEnumValue<TrainingStatus>(TrainingStatus); },
        "@odata.type": n => { userTrainingEventInfo.odataType = n.getStringValue(); },
        "trainingAssignedProperties": n => { userTrainingEventInfo.trainingAssignedProperties = n.getObjectValue<UserTrainingContentEventInfo>(createUserTrainingContentEventInfoFromDiscriminatorValue); },
        "trainingCompletedProperties": n => { userTrainingEventInfo.trainingCompletedProperties = n.getObjectValue<UserTrainingContentEventInfo>(createUserTrainingContentEventInfoFromDiscriminatorValue); },
        "trainingUpdatedProperties": n => { userTrainingEventInfo.trainingUpdatedProperties = n.getObjectValue<UserTrainingContentEventInfo>(createUserTrainingContentEventInfoFromDiscriminatorValue); },
    }
}
