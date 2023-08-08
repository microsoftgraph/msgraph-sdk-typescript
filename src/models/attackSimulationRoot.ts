import type {Entity} from './entity';
import type {Simulation} from './simulation';
import type {SimulationAutomation} from './simulationAutomation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AttackSimulationRoot extends Entity, Parsable {
    /**
     * Represents simulation automation created to run on a tenant.
     */
    simulationAutomations?: SimulationAutomation[] | undefined;
    /**
     * Represents an attack simulation training campaign in a tenant.
     */
    simulations?: Simulation[] | undefined;
}
