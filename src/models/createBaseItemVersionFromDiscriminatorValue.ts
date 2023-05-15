import {deserializeIntoBaseItemVersion} from './deserializeIntoBaseItemVersion';
import {deserializeIntoDocumentSetVersion} from './deserializeIntoDocumentSetVersion';
import {deserializeIntoDriveItemVersion} from './deserializeIntoDriveItemVersion';
import {deserializeIntoListItemVersion} from './deserializeIntoListItemVersion';
import {BaseItemVersion, DocumentSetVersion, DriveItemVersion, ListItemVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.documentSetVersion":
                    return deserializeIntoDocumentSetVersion;
                case "#microsoft.graph.driveItemVersion":
                    return deserializeIntoDriveItemVersion;
                case "#microsoft.graph.listItemVersion":
                    return deserializeIntoListItemVersion;
            }
        }
    }
    return deserializeIntoBaseItemVersion;
}
