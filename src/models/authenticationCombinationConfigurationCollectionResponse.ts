import type {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationCombinationConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AuthenticationCombinationConfiguration[] | undefined;
}
