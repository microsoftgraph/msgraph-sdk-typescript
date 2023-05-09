import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {Term} from './term';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Term[] | undefined;
}
