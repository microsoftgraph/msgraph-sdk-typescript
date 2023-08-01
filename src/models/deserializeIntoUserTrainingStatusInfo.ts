import {TrainingStatus} from './trainingStatus';
import type {UserTrainingStatusInfo} from './userTrainingStatusInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTrainingStatusInfo(userTrainingStatusInfo: UserTrainingStatusInfo | undefined = {} as UserTrainingStatusInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedDateTime": n => { userTrainingStatusInfo.assignedDateTime = n.getDateValue(); },
        "completionDateTime": n => { userTrainingStatusInfo.completionDateTime = n.getDateValue(); },
        "displayName": n => { userTrainingStatusInfo.displayName = n.getStringValue(); },
        "@odata.type": n => { userTrainingStatusInfo.odataType = n.getStringValue(); },
        "trainingStatus": n => { userTrainingStatusInfo.trainingStatus = n.getEnumValue<TrainingStatus>(TrainingStatus); },
    }
}
