import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type Term } from './term';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TermCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Term[] | undefined;
}
