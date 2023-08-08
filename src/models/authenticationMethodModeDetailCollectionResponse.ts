import type {AuthenticationMethodModeDetail} from './authenticationMethodModeDetail';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodModeDetailCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AuthenticationMethodModeDetail[] | undefined;
}
