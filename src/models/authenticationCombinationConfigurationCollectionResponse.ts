import {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationCombinationConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AuthenticationCombinationConfiguration[] | undefined;
}
