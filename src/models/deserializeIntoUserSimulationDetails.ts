import {AttackSimulationUser} from './attackSimulationUser';
import {createAttackSimulationUserFromDiscriminatorValue} from './createAttackSimulationUserFromDiscriminatorValue';
import {createUserSimulationEventInfoFromDiscriminatorValue} from './createUserSimulationEventInfoFromDiscriminatorValue';
import {createUserTrainingEventInfoFromDiscriminatorValue} from './createUserTrainingEventInfoFromDiscriminatorValue';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {serializeUserSimulationEventInfo} from './serializeUserSimulationEventInfo';
import {serializeUserTrainingEventInfo} from './serializeUserTrainingEventInfo';
import {UserSimulationDetails} from './userSimulationDetails';
import {UserSimulationEventInfo} from './userSimulationEventInfo';
import {UserTrainingEventInfo} from './userTrainingEventInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSimulationDetails(userSimulationDetails: UserSimulationDetails | undefined = {} as UserSimulationDetails) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedTrainingsCount": n => { userSimulationDetails.assignedTrainingsCount = n.getNumberValue(); },
        "completedTrainingsCount": n => { userSimulationDetails.completedTrainingsCount = n.getNumberValue(); },
        "compromisedDateTime": n => { userSimulationDetails.compromisedDateTime = n.getDateValue(); },
        "inProgressTrainingsCount": n => { userSimulationDetails.inProgressTrainingsCount = n.getNumberValue(); },
        "isCompromised": n => { userSimulationDetails.isCompromised = n.getBooleanValue(); },
        "@odata.type": n => { userSimulationDetails.odataType = n.getStringValue(); },
        "reportedPhishDateTime": n => { userSimulationDetails.reportedPhishDateTime = n.getDateValue(); },
        "simulationEvents": n => { userSimulationDetails.simulationEvents = n.getCollectionOfObjectValues<UserSimulationEventInfo>(createUserSimulationEventInfoFromDiscriminatorValue); },
        "simulationUser": n => { userSimulationDetails.simulationUser = n.getObjectValue<AttackSimulationUser>(createAttackSimulationUserFromDiscriminatorValue); },
        "trainingEvents": n => { userSimulationDetails.trainingEvents = n.getCollectionOfObjectValues<UserTrainingEventInfo>(createUserTrainingEventInfoFromDiscriminatorValue); },
    }
}
