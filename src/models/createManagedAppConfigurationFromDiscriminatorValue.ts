import {ManagedAppConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppConfiguration":
                    return new ManagedAppConfigurationImpl();
            }
        }
    }
    return new ManagedAppConfigurationImpl();
}
