import type {AttackSimulationSimulationUserCoverage} from './attackSimulationSimulationUserCoverage';
import type {AttackSimulationUser} from './attackSimulationUser';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationSimulationUserCoverage(writer: SerializationWriter, attackSimulationSimulationUserCoverage: AttackSimulationSimulationUserCoverage | undefined = {} as AttackSimulationSimulationUserCoverage) : void {
        writer.writeObjectValue<AttackSimulationUser>("attackSimulationUser", attackSimulationSimulationUserCoverage.attackSimulationUser, serializeAttackSimulationUser);
        writer.writeNumberValue("clickCount", attackSimulationSimulationUserCoverage.clickCount);
        writer.writeNumberValue("compromisedCount", attackSimulationSimulationUserCoverage.compromisedCount);
        writer.writeDateValue("latestSimulationDateTime", attackSimulationSimulationUserCoverage.latestSimulationDateTime);
        writer.writeStringValue("@odata.type", attackSimulationSimulationUserCoverage.odataType);
        writer.writeNumberValue("simulationCount", attackSimulationSimulationUserCoverage.simulationCount);
        writer.writeAdditionalData(attackSimulationSimulationUserCoverage.additionalData);
}
