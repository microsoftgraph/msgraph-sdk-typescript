import {AttackSimulationTrainingUserCoverage} from './attackSimulationTrainingUserCoverage';
import {AttackSimulationUser} from './attackSimulationUser';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {serializeUserTrainingStatusInfo} from './serializeUserTrainingStatusInfo';
import {UserTrainingStatusInfo} from './userTrainingStatusInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationTrainingUserCoverage(attackSimulationTrainingUserCoverage: AttackSimulationTrainingUserCoverage | undefined = {} as AttackSimulationTrainingUserCoverage, writer: SerializationWriter) : void {
        writer.writeObjectValue<AttackSimulationUser>("attackSimulationUser", attackSimulationTrainingUserCoverage.attackSimulationUser, serializeAttackSimulationUser);
        writer.writeStringValue("@odata.type", attackSimulationTrainingUserCoverage.odataType);
        writer.writeCollectionOfObjectValues<UserTrainingStatusInfo>("userTrainings", attackSimulationTrainingUserCoverage.userTrainings, serializeUserTrainingStatusInfo);
        writer.writeAdditionalData(attackSimulationTrainingUserCoverage.additionalData);
}
