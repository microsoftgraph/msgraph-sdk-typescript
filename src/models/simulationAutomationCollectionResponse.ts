import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SimulationAutomation} from './simulationAutomation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationAutomationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SimulationAutomation[] | undefined;
}
