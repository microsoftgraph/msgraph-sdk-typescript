import {AttackSimulationRepeatOffender} from './attackSimulationRepeatOffender';
import {AttackSimulationUser} from './attackSimulationUser';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationRepeatOffender(attackSimulationRepeatOffender: AttackSimulationRepeatOffender | undefined = {} as AttackSimulationRepeatOffender, writer: SerializationWriter) : void {
        writer.writeObjectValue<AttackSimulationUser>("attackSimulationUser", attackSimulationRepeatOffender.attackSimulationUser, serializeAttackSimulationUser);
        writer.writeStringValue("@odata.type", attackSimulationRepeatOffender.odataType);
        writer.writeNumberValue("repeatOffenceCount", attackSimulationRepeatOffender.repeatOffenceCount);
        writer.writeAdditionalData(attackSimulationRepeatOffender.additionalData);
}
