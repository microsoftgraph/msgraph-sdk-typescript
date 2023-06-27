import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {LinkedResource} from './linkedResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LinkedResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LinkedResource[] | undefined;
}
