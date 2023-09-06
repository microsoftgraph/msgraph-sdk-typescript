import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type CertificateBasedAuthConfiguration } from './certificateBasedAuthConfiguration';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CertificateBasedAuthConfiguration[] | undefined;
}
