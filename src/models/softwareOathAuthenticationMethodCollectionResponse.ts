import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type SoftwareOathAuthenticationMethod } from './softwareOathAuthenticationMethod';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SoftwareOathAuthenticationMethod[] | undefined;
}
