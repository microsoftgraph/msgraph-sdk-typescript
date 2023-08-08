import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SimulationAutomation} from './simulationAutomation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationAutomationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SimulationAutomation[] | undefined;
}
