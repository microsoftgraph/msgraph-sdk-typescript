import {deserializeIntoAzureActiveDirectoryTenant} from './deserializeIntoAzureActiveDirectoryTenant';
import {deserializeIntoCrossCloudAzureActiveDirectoryTenant} from './deserializeIntoCrossCloudAzureActiveDirectoryTenant';
import {deserializeIntoDomainIdentitySource} from './deserializeIntoDomainIdentitySource';
import {deserializeIntoExternalDomainFederation} from './deserializeIntoExternalDomainFederation';
import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {AzureActiveDirectoryTenant, CrossCloudAzureActiveDirectoryTenant, DomainIdentitySource, ExternalDomainFederation, IdentitySource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.azureActiveDirectoryTenant":
                    return deserializeIntoAzureActiveDirectoryTenant;
                case "#microsoft.graph.crossCloudAzureActiveDirectoryTenant":
                    return deserializeIntoCrossCloudAzureActiveDirectoryTenant;
                case "#microsoft.graph.domainIdentitySource":
                    return deserializeIntoDomainIdentitySource;
                case "#microsoft.graph.externalDomainFederation":
                    return deserializeIntoExternalDomainFederation;
            }
        }
    }
    return deserializeIntoIdentitySource;
}
