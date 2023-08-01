import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesDirectorySynchronizationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OnPremisesDirectorySynchronization[] | undefined;
}
