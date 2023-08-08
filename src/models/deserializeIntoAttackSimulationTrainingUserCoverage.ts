import type {AttackSimulationTrainingUserCoverage} from './attackSimulationTrainingUserCoverage';
import type {AttackSimulationUser} from './attackSimulationUser';
import {createAttackSimulationUserFromDiscriminatorValue} from './createAttackSimulationUserFromDiscriminatorValue';
import {createUserTrainingStatusInfoFromDiscriminatorValue} from './createUserTrainingStatusInfoFromDiscriminatorValue';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {serializeUserTrainingStatusInfo} from './serializeUserTrainingStatusInfo';
import type {UserTrainingStatusInfo} from './userTrainingStatusInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationTrainingUserCoverage(attackSimulationTrainingUserCoverage: AttackSimulationTrainingUserCoverage | undefined = {} as AttackSimulationTrainingUserCoverage) : Record<string, (node: ParseNode) => void> {
    return {
        "attackSimulationUser": n => { attackSimulationTrainingUserCoverage.attackSimulationUser = n.getObjectValue<AttackSimulationUser>(createAttackSimulationUserFromDiscriminatorValue); },
        "@odata.type": n => { attackSimulationTrainingUserCoverage.odataType = n.getStringValue(); },
        "userTrainings": n => { attackSimulationTrainingUserCoverage.userTrainings = n.getCollectionOfObjectValues<UserTrainingStatusInfo>(createUserTrainingStatusInfoFromDiscriminatorValue); },
    }
}
