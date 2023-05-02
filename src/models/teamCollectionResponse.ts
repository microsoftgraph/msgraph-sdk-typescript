import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Team} from './team';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Team[] | undefined;
}
