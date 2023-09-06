import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type GroupLifecyclePolicy } from './groupLifecyclePolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GroupLifecyclePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: GroupLifecyclePolicy[] | undefined;
}
