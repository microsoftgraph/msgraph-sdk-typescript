import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ConditionalAccessPolicy[] | undefined;
}
