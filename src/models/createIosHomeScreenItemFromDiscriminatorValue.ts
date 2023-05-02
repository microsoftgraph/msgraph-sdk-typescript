import {deserializeIntoIosHomeScreenApp} from './deserializeIntoIosHomeScreenApp';
import {deserializeIntoIosHomeScreenFolder} from './deserializeIntoIosHomeScreenFolder';
import {deserializeIntoIosHomeScreenItem} from './deserializeIntoIosHomeScreenItem';
import {IosHomeScreenApp, IosHomeScreenFolder, IosHomeScreenItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosHomeScreenApp":
                    return deserializeIntoIosHomeScreenApp;
                case "#microsoft.graph.iosHomeScreenFolder":
                    return deserializeIntoIosHomeScreenFolder;
            }
        }
    }
    return deserializeIntoIosHomeScreenItem;
}
