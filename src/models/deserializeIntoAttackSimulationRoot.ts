import { type AttackSimulationRoot } from './attackSimulationRoot';
import { createSimulationAutomationFromDiscriminatorValue } from './createSimulationAutomationFromDiscriminatorValue';
import { createSimulationFromDiscriminatorValue } from './createSimulationFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeSimulation } from './serializeSimulation';
import { serializeSimulationAutomation } from './serializeSimulationAutomation';
import { type Simulation } from './simulation';
import { type SimulationAutomation } from './simulationAutomation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationRoot(attackSimulationRoot: AttackSimulationRoot | undefined = {} as AttackSimulationRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attackSimulationRoot),
        "simulationAutomations": n => { attackSimulationRoot.simulationAutomations = n.getCollectionOfObjectValues<SimulationAutomation>(createSimulationAutomationFromDiscriminatorValue); },
        "simulations": n => { attackSimulationRoot.simulations = n.getCollectionOfObjectValues<Simulation>(createSimulationFromDiscriminatorValue); },
    }
}
