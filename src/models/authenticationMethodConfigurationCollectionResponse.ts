import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AuthenticationMethodConfiguration[] | undefined;
}
