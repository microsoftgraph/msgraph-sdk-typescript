import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesDirectorySynchronizationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OnPremisesDirectorySynchronization[] | undefined;
}
