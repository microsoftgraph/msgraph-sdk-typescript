import {IosHomeScreenApp, IosHomeScreenFolder, IosHomeScreenItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosHomeScreenApp":
                    return new IosHomeScreenApp();
                case "#microsoft.graph.iosHomeScreenFolder":
                    return new IosHomeScreenFolder();
            }
        }
    }
    return new IosHomeScreenItem();
}
