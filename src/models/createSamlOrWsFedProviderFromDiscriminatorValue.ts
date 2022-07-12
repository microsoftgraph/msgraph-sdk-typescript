import {InternalDomainFederation, SamlOrWsFedExternalDomainFederation, SamlOrWsFedProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSamlOrWsFedProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : SamlOrWsFedProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.internalDomainFederation":
                    return new InternalDomainFederation();
                case "#microsoft.graph.samlOrWsFedExternalDomainFederation":
                    return new SamlOrWsFedExternalDomainFederation();
            }
        }
    }
    return new SamlOrWsFedProvider();
}
