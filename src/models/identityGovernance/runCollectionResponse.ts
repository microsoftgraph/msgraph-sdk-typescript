import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Run} from './run';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface RunCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Run[] | undefined;
}
