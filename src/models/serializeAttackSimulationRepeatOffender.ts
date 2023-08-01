import type {AttackSimulationRepeatOffender} from './attackSimulationRepeatOffender';
import type {AttackSimulationUser} from './attackSimulationUser';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationRepeatOffender(writer: SerializationWriter, attackSimulationRepeatOffender: AttackSimulationRepeatOffender | undefined = {} as AttackSimulationRepeatOffender) : void {
        writer.writeObjectValue<AttackSimulationUser>("attackSimulationUser", attackSimulationRepeatOffender.attackSimulationUser, serializeAttackSimulationUser);
        writer.writeStringValue("@odata.type", attackSimulationRepeatOffender.odataType);
        writer.writeNumberValue("repeatOffenceCount", attackSimulationRepeatOffender.repeatOffenceCount);
        writer.writeAdditionalData(attackSimulationRepeatOffender.additionalData);
}
