import {IosHomeScreenAppImpl, IosHomeScreenFolderImpl, IosHomeScreenItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosHomeScreenApp":
                    return new IosHomeScreenAppImpl();
                case "#microsoft.graph.iosHomeScreenFolder":
                    return new IosHomeScreenFolderImpl();
            }
        }
    }
    return new IosHomeScreenItemImpl();
}
