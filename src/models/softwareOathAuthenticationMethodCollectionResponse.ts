import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SoftwareOathAuthenticationMethod} from './softwareOathAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SoftwareOathAuthenticationMethod[] | undefined;
}
