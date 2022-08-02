import {MailFolder, MailSearchFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailFolder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.mailSearchFolder":
                    return new MailSearchFolder();
            }
        }
    }
    return new MailFolder();
}
