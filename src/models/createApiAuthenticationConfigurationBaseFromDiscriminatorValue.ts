import {ApiAuthenticationConfigurationBaseImpl, BasicAuthenticationImpl, ClientCertificateAuthenticationImpl, Pkcs12CertificateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApiAuthenticationConfigurationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApiAuthenticationConfigurationBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.basicAuthentication":
                    return new BasicAuthenticationImpl();
                case "#microsoft.graph.clientCertificateAuthentication":
                    return new ClientCertificateAuthenticationImpl();
                case "#microsoft.graph.pkcs12Certificate":
                    return new Pkcs12CertificateImpl();
            }
        }
    }
    return new ApiAuthenticationConfigurationBaseImpl();
}
