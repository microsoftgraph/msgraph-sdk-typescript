import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CertificateBasedAuthConfiguration[] | undefined;
}
