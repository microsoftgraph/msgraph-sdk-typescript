import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {FilterOperatorSchema} from './filterOperatorSchema';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterOperatorSchemaCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: FilterOperatorSchema[] | undefined;
}
