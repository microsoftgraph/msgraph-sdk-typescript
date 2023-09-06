import { type CertificateAuthority } from './certificateAuthority';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfiguration extends Entity, Parsable {
    /**
     * Collection of certificate authorities which creates a trusted certificate chain.
     */
    certificateAuthorities?: CertificateAuthority[] | undefined;
}
