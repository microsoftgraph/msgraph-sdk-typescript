import type {AttackSimulationUser} from './attackSimulationUser';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {serializeUserSimulationEventInfo} from './serializeUserSimulationEventInfo';
import {serializeUserTrainingEventInfo} from './serializeUserTrainingEventInfo';
import type {UserSimulationDetails} from './userSimulationDetails';
import type {UserSimulationEventInfo} from './userSimulationEventInfo';
import type {UserTrainingEventInfo} from './userTrainingEventInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSimulationDetails(writer: SerializationWriter, userSimulationDetails: UserSimulationDetails | undefined = {} as UserSimulationDetails) : void {
        writer.writeNumberValue("assignedTrainingsCount", userSimulationDetails.assignedTrainingsCount);
        writer.writeNumberValue("completedTrainingsCount", userSimulationDetails.completedTrainingsCount);
        writer.writeDateValue("compromisedDateTime", userSimulationDetails.compromisedDateTime);
        writer.writeNumberValue("inProgressTrainingsCount", userSimulationDetails.inProgressTrainingsCount);
        writer.writeBooleanValue("isCompromised", userSimulationDetails.isCompromised);
        writer.writeStringValue("@odata.type", userSimulationDetails.odataType);
        writer.writeDateValue("reportedPhishDateTime", userSimulationDetails.reportedPhishDateTime);
        writer.writeCollectionOfObjectValues<UserSimulationEventInfo>("simulationEvents", userSimulationDetails.simulationEvents, serializeUserSimulationEventInfo);
        writer.writeObjectValue<AttackSimulationUser>("simulationUser", userSimulationDetails.simulationUser, serializeAttackSimulationUser);
        writer.writeCollectionOfObjectValues<UserTrainingEventInfo>("trainingEvents", userSimulationDetails.trainingEvents, serializeUserTrainingEventInfo);
        writer.writeAdditionalData(userSimulationDetails.additionalData);
}
