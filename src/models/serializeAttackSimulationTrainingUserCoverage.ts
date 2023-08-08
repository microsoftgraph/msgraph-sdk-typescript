import type {AttackSimulationTrainingUserCoverage} from './attackSimulationTrainingUserCoverage';
import type {AttackSimulationUser} from './attackSimulationUser';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {serializeUserTrainingStatusInfo} from './serializeUserTrainingStatusInfo';
import type {UserTrainingStatusInfo} from './userTrainingStatusInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationTrainingUserCoverage(writer: SerializationWriter, attackSimulationTrainingUserCoverage: AttackSimulationTrainingUserCoverage | undefined = {} as AttackSimulationTrainingUserCoverage) : void {
        writer.writeObjectValue<AttackSimulationUser>("attackSimulationUser", attackSimulationTrainingUserCoverage.attackSimulationUser, serializeAttackSimulationUser);
        writer.writeStringValue("@odata.type", attackSimulationTrainingUserCoverage.odataType);
        writer.writeCollectionOfObjectValues<UserTrainingStatusInfo>("userTrainings", attackSimulationTrainingUserCoverage.userTrainings, serializeUserTrainingStatusInfo);
        writer.writeAdditionalData(attackSimulationTrainingUserCoverage.additionalData);
}
