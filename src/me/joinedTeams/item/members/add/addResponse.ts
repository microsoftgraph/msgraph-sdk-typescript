import { type ActionResultPart } from '../../../../../models/actionResultPart';
import { type BaseCollectionPaginationCountResponse } from '../../../../../models/baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AddResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ActionResultPart[] | undefined;
}
