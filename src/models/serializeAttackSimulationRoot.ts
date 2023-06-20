import {AttackSimulationRoot} from './attackSimulationRoot';
import {serializeEntity} from './serializeEntity';
import {serializeSimulation} from './serializeSimulation';
import {serializeSimulationAutomation} from './serializeSimulationAutomation';
import {Simulation} from './simulation';
import {SimulationAutomation} from './simulationAutomation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationRoot(attackSimulationRoot: AttackSimulationRoot | undefined = {} as AttackSimulationRoot, writer: SerializationWriter) : void {
        serializeEntity(writer, attackSimulationRoot)
        writer.writeCollectionOfObjectValues<SimulationAutomation>("simulationAutomations", attackSimulationRoot.simulationAutomations, serializeSimulationAutomation);
        writer.writeCollectionOfObjectValues<Simulation>("simulations", attackSimulationRoot.simulations, serializeSimulation);
}
