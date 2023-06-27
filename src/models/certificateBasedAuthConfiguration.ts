import {CertificateAuthority} from './certificateAuthority';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfiguration extends Entity, Parsable {
    /**
     * Collection of certificate authorities which creates a trusted certificate chain.
     */
    certificateAuthorities?: CertificateAuthority[] | undefined;
}
