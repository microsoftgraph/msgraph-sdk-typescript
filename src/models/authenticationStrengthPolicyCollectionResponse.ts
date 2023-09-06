import { type AuthenticationStrengthPolicy } from './authenticationStrengthPolicy';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AuthenticationStrengthPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AuthenticationStrengthPolicy[] | undefined;
}
