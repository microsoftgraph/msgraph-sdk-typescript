import {IosVppEBook, ManagedEBook} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedEBook {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosVppEBook":
                    return new IosVppEBook();
            }
        }
    }
    return new ManagedEBook();
}
