import type {AttackSimulationSimulationUserCoverage} from './attackSimulationSimulationUserCoverage';
import type {AttackSimulationUser} from './attackSimulationUser';
import {createAttackSimulationUserFromDiscriminatorValue} from './createAttackSimulationUserFromDiscriminatorValue';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationSimulationUserCoverage(attackSimulationSimulationUserCoverage: AttackSimulationSimulationUserCoverage | undefined = {} as AttackSimulationSimulationUserCoverage) : Record<string, (node: ParseNode) => void> {
    return {
        "attackSimulationUser": n => { attackSimulationSimulationUserCoverage.attackSimulationUser = n.getObjectValue<AttackSimulationUser>(createAttackSimulationUserFromDiscriminatorValue); },
        "clickCount": n => { attackSimulationSimulationUserCoverage.clickCount = n.getNumberValue(); },
        "compromisedCount": n => { attackSimulationSimulationUserCoverage.compromisedCount = n.getNumberValue(); },
        "latestSimulationDateTime": n => { attackSimulationSimulationUserCoverage.latestSimulationDateTime = n.getDateValue(); },
        "@odata.type": n => { attackSimulationSimulationUserCoverage.odataType = n.getStringValue(); },
        "simulationCount": n => { attackSimulationSimulationUserCoverage.simulationCount = n.getNumberValue(); },
    }
}
