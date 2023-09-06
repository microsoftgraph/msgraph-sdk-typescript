import { type AuthenticationContextClassReference } from './authenticationContextClassReference';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AuthenticationContextClassReferenceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AuthenticationContextClassReference[] | undefined;
}
