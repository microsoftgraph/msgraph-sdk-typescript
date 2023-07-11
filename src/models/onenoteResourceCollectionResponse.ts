import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {OnenoteResource} from './onenoteResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OnenoteResource[] | undefined;
}
