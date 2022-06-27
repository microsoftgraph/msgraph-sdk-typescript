import {AzureActiveDirectoryTenantImpl, DomainIdentitySourceImpl, ExternalDomainFederationImpl, IdentitySourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.azureActiveDirectoryTenant":
                    return new AzureActiveDirectoryTenantImpl();
                case "#microsoft.graph.domainIdentitySource":
                    return new DomainIdentitySourceImpl();
                case "#microsoft.graph.externalDomainFederation":
                    return new ExternalDomainFederationImpl();
            }
        }
    }
    return new IdentitySourceImpl();
}
