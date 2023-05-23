import {BaseCollectionPaginationCountResponse} from '../../../../../../../models/baseCollectionPaginationCountResponse';
import {FilterOperatorSchema} from '../../../../../../../models/filterOperatorSchema';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterOperatorsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: FilterOperatorSchema[] | undefined;
}
