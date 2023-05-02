import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Person} from './person';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PersonCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Person[] | undefined;
}
