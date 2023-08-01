import type {AttackSimulationRepeatOffender} from './attackSimulationRepeatOffender';
import type {AttackSimulationUser} from './attackSimulationUser';
import {createAttackSimulationUserFromDiscriminatorValue} from './createAttackSimulationUserFromDiscriminatorValue';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationRepeatOffender(attackSimulationRepeatOffender: AttackSimulationRepeatOffender | undefined = {} as AttackSimulationRepeatOffender) : Record<string, (node: ParseNode) => void> {
    return {
        "attackSimulationUser": n => { attackSimulationRepeatOffender.attackSimulationUser = n.getObjectValue<AttackSimulationUser>(createAttackSimulationUserFromDiscriminatorValue); },
        "@odata.type": n => { attackSimulationRepeatOffender.odataType = n.getStringValue(); },
        "repeatOffenceCount": n => { attackSimulationRepeatOffender.repeatOffenceCount = n.getNumberValue(); },
    }
}
