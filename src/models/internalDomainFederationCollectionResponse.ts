import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {InternalDomainFederation} from './internalDomainFederation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InternalDomainFederationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: InternalDomainFederation[] | undefined;
}
