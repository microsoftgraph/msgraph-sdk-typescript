import {AuthenticationMethodModeDetail} from './authenticationMethodModeDetail';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodModeDetailCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AuthenticationMethodModeDetail[] | undefined;
}
