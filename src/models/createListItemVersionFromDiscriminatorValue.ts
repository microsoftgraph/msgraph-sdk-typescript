import {DocumentSetVersion, ListItemVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListItemVersion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.documentSetVersion":
                    return new DocumentSetVersion();
            }
        }
    }
    return new ListItemVersion();
}
