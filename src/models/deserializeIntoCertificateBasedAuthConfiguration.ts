import {CertificateAuthority} from './certificateAuthority';
import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {createCertificateAuthorityFromDiscriminatorValue} from './createCertificateAuthorityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeCertificateAuthority} from './serializeCertificateAuthority';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificateBasedAuthConfiguration(certificateBasedAuthConfiguration: CertificateBasedAuthConfiguration | undefined = {} as CertificateBasedAuthConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(certificateBasedAuthConfiguration),
        "certificateAuthorities": n => { certificateBasedAuthConfiguration.certificateAuthorities = n.getCollectionOfObjectValues<CertificateAuthority>(createCertificateAuthorityFromDiscriminatorValue); },
    }
}
