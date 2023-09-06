import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ConditionalAccessPolicy } from './conditionalAccessPolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ConditionalAccessPolicy[] | undefined;
}
