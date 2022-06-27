import {CertificateAuthority} from './certificateAuthority';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfiguration extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Collection of certificate authorities which creates a trusted certificate chain. */
    certificateAuthorities?: CertificateAuthority[] | undefined;
}
