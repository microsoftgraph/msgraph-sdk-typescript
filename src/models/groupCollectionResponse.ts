import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Group} from './group';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Group[] | undefined;
}
