import {Entity} from './entity';
import {Simulation} from './simulation';
import {SimulationAutomation} from './simulationAutomation';
import {Parsable} from '@microsoft/kiota-abstractions';

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
