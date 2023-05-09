import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface StringCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: string[] | undefined;
}
