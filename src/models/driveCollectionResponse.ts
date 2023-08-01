import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Drive} from './drive';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Drive[] | undefined;
}
