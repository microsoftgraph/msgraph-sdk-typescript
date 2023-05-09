import {AttackSimulationRoot} from './attackSimulationRoot';
import {createSimulationAutomationFromDiscriminatorValue} from './createSimulationAutomationFromDiscriminatorValue';
import {createSimulationFromDiscriminatorValue} from './createSimulationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeSimulation} from './serializeSimulation';
import {serializeSimulationAutomation} from './serializeSimulationAutomation';
import {Simulation} from './simulation';
import {SimulationAutomation} from './simulationAutomation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationRoot(attackSimulationRoot: AttackSimulationRoot | undefined = {} as AttackSimulationRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attackSimulationRoot),
        "simulationAutomations": n => { attackSimulationRoot.simulationAutomations = n.getCollectionOfObjectValues<SimulationAutomation>(createSimulationAutomationFromDiscriminatorValue); },
        "simulations": n => { attackSimulationRoot.simulations = n.getCollectionOfObjectValues<Simulation>(createSimulationFromDiscriminatorValue); },
    }
}
