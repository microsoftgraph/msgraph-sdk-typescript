import {AssignedTrainingInfo} from './assignedTrainingInfo';
import {serializeAssignedTrainingInfo} from './serializeAssignedTrainingInfo';
import {TrainingEventsContent} from './trainingEventsContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTrainingEventsContent(writer: SerializationWriter, trainingEventsContent: TrainingEventsContent | undefined = {} as TrainingEventsContent) : void {
        writer.writeCollectionOfObjectValues<AssignedTrainingInfo>("assignedTrainingsInfos", trainingEventsContent.assignedTrainingsInfos, serializeAssignedTrainingInfo);
        writer.writeStringValue("@odata.type", trainingEventsContent.odataType);
        writer.writeNumberValue("trainingsAssignedUserCount", trainingEventsContent.trainingsAssignedUserCount);
        writer.writeAdditionalData(trainingEventsContent.additionalData);
}
