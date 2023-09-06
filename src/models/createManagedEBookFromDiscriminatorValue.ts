import { deserializeIntoIosVppEBook } from './deserializeIntoIosVppEBook';
import { deserializeIntoManagedEBook } from './deserializeIntoManagedEBook';
import { type IosVppEBook, type ManagedEBook } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

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
