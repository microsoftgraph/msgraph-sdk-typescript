import {SamlOrWsFedProviderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSamlOrWsFedProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : SamlOrWsFedProviderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.samlOrWsFedProvider":
                    return new SamlOrWsFedProviderImpl();
            }
        }
    }
    return new SamlOrWsFedProviderImpl();
}
