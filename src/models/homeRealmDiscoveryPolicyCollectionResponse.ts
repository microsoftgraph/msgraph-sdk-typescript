import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type HomeRealmDiscoveryPolicy } from './homeRealmDiscoveryPolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface HomeRealmDiscoveryPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: HomeRealmDiscoveryPolicy[] | undefined;
}
