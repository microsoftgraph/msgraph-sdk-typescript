import {SamlOrWsFedProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSamlOrWsFedProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : SamlOrWsFedProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.samlOrWsFedProvider":
                    return new SamlOrWsFedProvider();
            }
        }
    }
    return new SamlOrWsFedProvider();
}
