import { type BaseCollectionPaginationCountResponse } from '../../../../../../../models/baseCollectionPaginationCountResponse';
import { type FilterOperatorSchema } from '../../../../../../../models/filterOperatorSchema';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface FilterOperatorsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: FilterOperatorSchema[] | undefined;
}
