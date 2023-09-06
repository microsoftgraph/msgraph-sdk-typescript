import { type ClientCertificateAuthentication } from './clientCertificateAuthentication';
import { type Pkcs12CertificateInformation } from './pkcs12CertificateInformation';
import { serializeApiAuthenticationConfigurationBase } from './serializeApiAuthenticationConfigurationBase';
import { serializePkcs12CertificateInformation } from './serializePkcs12CertificateInformation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeClientCertificateAuthentication(writer: SerializationWriter, clientCertificateAuthentication: ClientCertificateAuthentication | undefined = {} as ClientCertificateAuthentication) : void {
        serializeApiAuthenticationConfigurationBase(writer, clientCertificateAuthentication)
        writer.writeCollectionOfObjectValues<Pkcs12CertificateInformation>("certificateList", clientCertificateAuthentication.certificateList, serializePkcs12CertificateInformation);
}
