import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SoftwareOathAuthenticationMethod} from './softwareOathAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SoftwareOathAuthenticationMethod[] | undefined;
}
