import {DirectoryObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryObject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.directoryObject":
                    return new DirectoryObject();
            }
        }
    }
    return new DirectoryObject();
}
