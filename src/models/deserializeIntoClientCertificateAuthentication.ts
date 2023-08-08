import type {ClientCertificateAuthentication} from './clientCertificateAuthentication';
import {createPkcs12CertificateInformationFromDiscriminatorValue} from './createPkcs12CertificateInformationFromDiscriminatorValue';
import {deserializeIntoApiAuthenticationConfigurationBase} from './deserializeIntoApiAuthenticationConfigurationBase';
import type {Pkcs12CertificateInformation} from './pkcs12CertificateInformation';
import {serializePkcs12CertificateInformation} from './serializePkcs12CertificateInformation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClientCertificateAuthentication(clientCertificateAuthentication: ClientCertificateAuthentication | undefined = {} as ClientCertificateAuthentication) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiAuthenticationConfigurationBase(clientCertificateAuthentication),
        "certificateList": n => { clientCertificateAuthentication.certificateList = n.getCollectionOfObjectValues<Pkcs12CertificateInformation>(createPkcs12CertificateInformationFromDiscriminatorValue); },
    }
}
