import {deserializeIntoInternalDomainFederation} from './deserializeIntoInternalDomainFederation';
import {deserializeIntoSamlOrWsFedExternalDomainFederation} from './deserializeIntoSamlOrWsFedExternalDomainFederation';
import {deserializeIntoSamlOrWsFedProvider} from './deserializeIntoSamlOrWsFedProvider';
import {InternalDomainFederation, SamlOrWsFedExternalDomainFederation, SamlOrWsFedProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSamlOrWsFedProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.internalDomainFederation":
                    return deserializeIntoInternalDomainFederation;
                case "#microsoft.graph.samlOrWsFedExternalDomainFederation":
                    return deserializeIntoSamlOrWsFedExternalDomainFederation;
            }
        }
    }
    return deserializeIntoSamlOrWsFedProvider;
}
