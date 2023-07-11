import {Entity} from './entity';
import {SimulationAutomationRunStatus} from './simulationAutomationRunStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationAutomationRun extends Entity, Parsable {
    /**
     * Date and time when the run ends in an attack simulation automation.
     */
    endDateTime?: Date | undefined;
    /**
     * Unique identifier for the attack simulation campaign initiated in the attack simulation automation run.
     */
    simulationId?: string | undefined;
    /**
     * Date and time when the run starts in an attack simulation automation.
     */
    startDateTime?: Date | undefined;
    /**
     * Status of the attack simulation automation run. The possible values are: unknown, running, succeeded, failed, skipped, unknownFutureValue.
     */
    status?: SimulationAutomationRunStatus | undefined;
}
