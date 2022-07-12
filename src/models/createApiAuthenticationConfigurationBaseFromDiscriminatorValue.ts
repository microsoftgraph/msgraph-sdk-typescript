import {ApiAuthenticationConfigurationBase, BasicAuthentication, ClientCertificateAuthentication, Pkcs12Certificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApiAuthenticationConfigurationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApiAuthenticationConfigurationBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.basicAuthentication":
                    return new BasicAuthentication();
                case "#microsoft.graph.clientCertificateAuthentication":
                    return new ClientCertificateAuthentication();
                case "#microsoft.graph.pkcs12Certificate":
                    return new Pkcs12Certificate();
            }
        }
    }
    return new ApiAuthenticationConfigurationBase();
}
