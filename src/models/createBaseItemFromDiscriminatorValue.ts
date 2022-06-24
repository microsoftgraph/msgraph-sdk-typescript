import {BaseItemImpl, DriveImpl, DriveItemImpl, ListImpl, ListItemImpl, SharedDriveItemImpl, SiteImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.drive":
                    return new DriveImpl();
                case "#microsoft.graph.driveItem":
                    return new DriveItemImpl();
                case "#microsoft.graph.list":
                    return new ListImpl();
                case "#microsoft.graph.listItem":
                    return new ListItemImpl();
                case "#microsoft.graph.sharedDriveItem":
                    return new SharedDriveItemImpl();
                case "#microsoft.graph.site":
                    return new SiteImpl();
            }
        }
    }
    return new BaseItemImpl();
}
