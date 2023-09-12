import { deserializeIntoMailFolder } from './deserializeIntoMailFolder';
import { deserializeIntoMailSearchFolder } from './deserializeIntoMailSearchFolder';
import { type MailFolder, type MailSearchFolder } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMailFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.mailSearchFolder":
                    return deserializeIntoMailSearchFolder;
            }
        }
    }
    return deserializeIntoMailFolder;
}
