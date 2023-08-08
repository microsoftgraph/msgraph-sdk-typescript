import type {CertificateAuthority} from './certificateAuthority';
import type {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {serializeCertificateAuthority} from './serializeCertificateAuthority';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificateBasedAuthConfiguration(writer: SerializationWriter, certificateBasedAuthConfiguration: CertificateBasedAuthConfiguration | undefined = {} as CertificateBasedAuthConfiguration) : void {
        serializeEntity(writer, certificateBasedAuthConfiguration)
        writer.writeCollectionOfObjectValues<CertificateAuthority>("certificateAuthorities", certificateBasedAuthConfiguration.certificateAuthorities, serializeCertificateAuthority);
}
