import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type SimulationAutomationRun } from './simulationAutomationRun';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SimulationAutomationRunCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SimulationAutomationRun[] | undefined;
}
