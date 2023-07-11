import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Call} from './call';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Call[] | undefined;
}
