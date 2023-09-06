import { type AssignedTrainingInfo } from './assignedTrainingInfo';
import { createAssignedTrainingInfoFromDiscriminatorValue } from './createAssignedTrainingInfoFromDiscriminatorValue';
import { serializeAssignedTrainingInfo } from './serializeAssignedTrainingInfo';
import { type TrainingEventsContent } from './trainingEventsContent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTrainingEventsContent(trainingEventsContent: TrainingEventsContent | undefined = {} as TrainingEventsContent) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedTrainingsInfos": n => { trainingEventsContent.assignedTrainingsInfos = n.getCollectionOfObjectValues<AssignedTrainingInfo>(createAssignedTrainingInfoFromDiscriminatorValue); },
        "@odata.type": n => { trainingEventsContent.odataType = n.getStringValue(); },
        "trainingsAssignedUserCount": n => { trainingEventsContent.trainingsAssignedUserCount = n.getNumberValue(); },
    }
}
