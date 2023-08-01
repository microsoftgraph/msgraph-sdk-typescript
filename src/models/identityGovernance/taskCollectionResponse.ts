import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Task} from './task';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Task[] | undefined;
}
