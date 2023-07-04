import {EmailIdentity} from './emailIdentity';
import {Entity} from './entity';
import {SimulationAutomationRun} from './simulationAutomationRun';
import {SimulationAutomationStatus} from './simulationAutomationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationAutomation extends Entity, Parsable {
    /**
     * Identity of the user who created the attack simulation automation.
     */
    createdBy?: EmailIdentity | undefined;
    /**
     * Date and time when the attack simulation automation was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Description of the attack simulation automation.
     */
    description?: string | undefined;
    /**
     * Display name of the attack simulation automation. Supports $filter and $orderby.
     */
    displayName?: string | undefined;
    /**
     * Identity of the user who most recently modified the attack simulation automation.
     */
    lastModifiedBy?: EmailIdentity | undefined;
    /**
     * Date and time when the attack simulation automation was most recently modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Date and time of the latest run of the attack simulation automation.
     */
    lastRunDateTime?: Date | undefined;
    /**
     * Date and time of the upcoming run of the attack simulation automation.
     */
    nextRunDateTime?: Date | undefined;
    /**
     * A collection of simulation automation runs.
     */
    runs?: SimulationAutomationRun[] | undefined;
    /**
     * Status of the attack simulation automation. Supports $filter and $orderby. The possible values are: unknown, draft, notRunning, running, completed, unknownFutureValue.
     */
    status?: SimulationAutomationStatus | undefined;
}
