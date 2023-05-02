import {CertificateAuthority} from './certificateAuthority';
import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {serializeCertificateAuthority} from './serializeCertificateAuthority';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificateBasedAuthConfiguration(writer: SerializationWriter, certificateBasedAuthConfiguration: CertificateBasedAuthConfiguration | undefined = {} as CertificateBasedAuthConfiguration) : void {
        serializeEntity(writer, certificateBasedAuthConfiguration)
        writer.writeCollectionOfObjectValues<CertificateAuthority>("certificateAuthorities", certificateBasedAuthConfiguration.certificateAuthorities, serializeCertificateAuthority);
}
