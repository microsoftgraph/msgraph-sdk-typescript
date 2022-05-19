import {ManagedApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedApp":
                    return new ManagedApp();
            }
        }
    }
    return new ManagedApp();
}
