import {AttackSimulationSimulationUserCoverage} from './attackSimulationSimulationUserCoverage';
import {AttackSimulationUser} from './attackSimulationUser';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationSimulationUserCoverage(writer: SerializationWriter, attackSimulationSimulationUserCoverage: AttackSimulationSimulationUserCoverage | undefined = {} as AttackSimulationSimulationUserCoverage) : void {
        writer.writeObjectValue<AttackSimulationUser>("attackSimulationUser", attackSimulationSimulationUserCoverage.attackSimulationUser, serializeAttackSimulationUser);
        writer.writeNumberValue("clickCount", attackSimulationSimulationUserCoverage.clickCount);
        writer.writeNumberValue("compromisedCount", attackSimulationSimulationUserCoverage.compromisedCount);
        writer.writeDateValue("latestSimulationDateTime", attackSimulationSimulationUserCoverage.latestSimulationDateTime);
        writer.writeStringValue("@odata.type", attackSimulationSimulationUserCoverage.odataType);
        writer.writeNumberValue("simulationCount", attackSimulationSimulationUserCoverage.simulationCount);
        writer.writeAdditionalData(attackSimulationSimulationUserCoverage.additionalData);
}
