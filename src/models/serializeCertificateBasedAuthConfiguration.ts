import {CertificateAuthority} from './certificateAuthority';
import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {serializeCertificateAuthority} from './serializeCertificateAuthority';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificateBasedAuthConfiguration(certificateBasedAuthConfiguration: CertificateBasedAuthConfiguration | undefined = {} as CertificateBasedAuthConfiguration, writer: SerializationWriter) : void {
        serializeEntity(writer, certificateBasedAuthConfiguration)
        writer.writeCollectionOfObjectValues<CertificateAuthority>("certificateAuthorities", certificateBasedAuthConfiguration.certificateAuthorities, serializeCertificateAuthority);
}
