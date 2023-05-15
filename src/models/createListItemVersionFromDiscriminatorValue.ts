import {deserializeIntoDocumentSetVersion} from './deserializeIntoDocumentSetVersion';
import {deserializeIntoListItemVersion} from './deserializeIntoListItemVersion';
import {DocumentSetVersion, ListItemVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.documentSetVersion":
                    return deserializeIntoDocumentSetVersion;
            }
        }
    }
    return deserializeIntoListItemVersion;
}
