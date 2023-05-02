import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SimulationAutomationRun} from './simulationAutomationRun';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationAutomationRunCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SimulationAutomationRun[] | undefined;
}
