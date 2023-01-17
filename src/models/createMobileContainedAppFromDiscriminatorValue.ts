import {MobileContainedApp, WindowsUniversalAppXContainedApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileContainedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileContainedApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.windowsUniversalAppXContainedApp":
                    return new WindowsUniversalAppXContainedApp();
            }
        }
    }
    return new MobileContainedApp();
}
