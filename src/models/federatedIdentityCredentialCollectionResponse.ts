import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {FederatedIdentityCredential} from './federatedIdentityCredential';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FederatedIdentityCredentialCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: FederatedIdentityCredential[] | undefined;
}
