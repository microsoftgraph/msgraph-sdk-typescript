import {deserializeIntoConditionalAccessAllExternalTenants} from './deserializeIntoConditionalAccessAllExternalTenants';
import {deserializeIntoConditionalAccessEnumeratedExternalTenants} from './deserializeIntoConditionalAccessEnumeratedExternalTenants';
import {deserializeIntoConditionalAccessExternalTenants} from './deserializeIntoConditionalAccessExternalTenants';
import {ConditionalAccessAllExternalTenants, ConditionalAccessEnumeratedExternalTenants, ConditionalAccessExternalTenants} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessExternalTenantsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.conditionalAccessAllExternalTenants":
                    return deserializeIntoConditionalAccessAllExternalTenants;
                case "#microsoft.graph.conditionalAccessEnumeratedExternalTenants":
                    return deserializeIntoConditionalAccessEnumeratedExternalTenants;
            }
        }
    }
    return deserializeIntoConditionalAccessExternalTenants;
}
