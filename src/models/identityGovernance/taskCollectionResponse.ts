import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {Task} from './task';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Task[] | undefined;
}
