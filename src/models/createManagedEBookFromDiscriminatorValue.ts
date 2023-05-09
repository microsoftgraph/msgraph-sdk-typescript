import {deserializeIntoIosVppEBook} from './deserializeIntoIosVppEBook';
import {deserializeIntoManagedEBook} from './deserializeIntoManagedEBook';
import {IosVppEBook, ManagedEBook} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosVppEBook":
                    return deserializeIntoIosVppEBook;
            }
        }
    }
    return deserializeIntoManagedEBook;
}
