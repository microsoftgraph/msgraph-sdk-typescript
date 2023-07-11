import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {Run} from './run';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RunCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Run[] | undefined;
}
