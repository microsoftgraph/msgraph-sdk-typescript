import {CertificateAuthority} from './certificateAuthority';
import {Entity} from './entity';

export interface CertificateBasedAuthConfiguration extends Entity{
    /** Collection of certificate authorities which creates a trusted certificate chain. */
    certificateAuthorities?:CertificateAuthority[] | undefined;
}
