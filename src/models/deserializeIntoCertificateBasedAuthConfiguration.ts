import type {CertificateAuthority} from './certificateAuthority';
import type {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {createCertificateAuthorityFromDiscriminatorValue} from './createCertificateAuthorityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeCertificateAuthority} from './serializeCertificateAuthority';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificateBasedAuthConfiguration(certificateBasedAuthConfiguration: CertificateBasedAuthConfiguration | undefined = {} as CertificateBasedAuthConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(certificateBasedAuthConfiguration),
        "certificateAuthorities": n => { certificateBasedAuthConfiguration.certificateAuthorities = n.getCollectionOfObjectValues<CertificateAuthority>(createCertificateAuthorityFromDiscriminatorValue); },
    }
}
