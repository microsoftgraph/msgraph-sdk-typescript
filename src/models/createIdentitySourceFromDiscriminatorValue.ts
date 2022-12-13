import {AzureActiveDirectoryTenant, CrossCloudAzureActiveDirectoryTenant, DomainIdentitySource, ExternalDomainFederation, IdentitySource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.azureActiveDirectoryTenant":
                    return new AzureActiveDirectoryTenant();
                case "#microsoft.graph.crossCloudAzureActiveDirectoryTenant":
                    return new CrossCloudAzureActiveDirectoryTenant();
                case "#microsoft.graph.domainIdentitySource":
                    return new DomainIdentitySource();
                case "#microsoft.graph.externalDomainFederation":
                    return new ExternalDomainFederation();
            }
        }
    }
    return new IdentitySource();
}
