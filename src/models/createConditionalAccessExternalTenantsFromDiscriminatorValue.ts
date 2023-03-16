import {ConditionalAccessAllExternalTenants, ConditionalAccessEnumeratedExternalTenants, ConditionalAccessExternalTenants} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessExternalTenantsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessExternalTenants {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.conditionalAccessAllExternalTenants":
                    return new ConditionalAccessAllExternalTenants();
                case "#microsoft.graph.conditionalAccessEnumeratedExternalTenants":
                    return new ConditionalAccessEnumeratedExternalTenants();
            }
        }
    }
    return new ConditionalAccessExternalTenants();
}
