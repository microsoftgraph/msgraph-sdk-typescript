import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Simulation } from './simulation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SimulationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Simulation[] | undefined;
}
