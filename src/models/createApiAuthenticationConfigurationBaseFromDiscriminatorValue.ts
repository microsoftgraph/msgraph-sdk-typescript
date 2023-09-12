import { deserializeIntoApiAuthenticationConfigurationBase } from './deserializeIntoApiAuthenticationConfigurationBase';
import { deserializeIntoBasicAuthentication } from './deserializeIntoBasicAuthentication';
import { deserializeIntoClientCertificateAuthentication } from './deserializeIntoClientCertificateAuthentication';
import { deserializeIntoPkcs12Certificate } from './deserializeIntoPkcs12Certificate';
import { type ApiAuthenticationConfigurationBase, type BasicAuthentication, type ClientCertificateAuthentication, type Pkcs12Certificate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApiAuthenticationConfigurationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.basicAuthentication":
                    return deserializeIntoBasicAuthentication;
                case "#microsoft.graph.clientCertificateAuthentication":
                    return deserializeIntoClientCertificateAuthentication;
                case "#microsoft.graph.pkcs12Certificate":
                    return deserializeIntoPkcs12Certificate;
            }
        }
    }
    return deserializeIntoApiAuthenticationConfigurationBase;
}
