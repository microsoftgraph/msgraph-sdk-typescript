import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Simulation} from './simulation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Simulation[] | undefined;
}
