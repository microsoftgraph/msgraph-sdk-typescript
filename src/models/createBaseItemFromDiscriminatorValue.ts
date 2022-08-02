import {BaseItem, Drive, DriveItem, List, ListItem, SharedDriveItem, Site} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.drive":
                    return new Drive();
                case "#microsoft.graph.driveItem":
                    return new DriveItem();
                case "#microsoft.graph.list":
                    return new List();
                case "#microsoft.graph.listItem":
                    return new ListItem();
                case "#microsoft.graph.sharedDriveItem":
                    return new SharedDriveItem();
                case "#microsoft.graph.site":
                    return new Site();
            }
        }
    }
    return new BaseItem();
}
