import { deserializeIntoBaseItem } from './deserializeIntoBaseItem';
import { deserializeIntoDrive } from './deserializeIntoDrive';
import { deserializeIntoDriveItem } from './deserializeIntoDriveItem';
import { deserializeIntoList } from './deserializeIntoList';
import { deserializeIntoListItem } from './deserializeIntoListItem';
import { deserializeIntoSharedDriveItem } from './deserializeIntoSharedDriveItem';
import { deserializeIntoSite } from './deserializeIntoSite';
import { type BaseItem, type Drive, type DriveItem, type List, type ListItem, type SharedDriveItem, type Site } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBaseItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.drive":
                    return deserializeIntoDrive;
                case "#microsoft.graph.driveItem":
                    return deserializeIntoDriveItem;
                case "#microsoft.graph.list":
                    return deserializeIntoList;
                case "#microsoft.graph.listItem":
                    return deserializeIntoListItem;
                case "#microsoft.graph.sharedDriveItem":
                    return deserializeIntoSharedDriveItem;
                case "#microsoft.graph.site":
                    return deserializeIntoSite;
            }
        }
    }
    return deserializeIntoBaseItem;
}
