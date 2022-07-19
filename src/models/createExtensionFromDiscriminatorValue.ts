import {Extension, OpenTypeExtension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Extension {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.openTypeExtension":
                    return new OpenTypeExtension();
            }
        }
    }
    return new Extension();
}
