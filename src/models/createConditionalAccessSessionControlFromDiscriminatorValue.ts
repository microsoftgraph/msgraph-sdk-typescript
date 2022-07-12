import {ApplicationEnforcedRestrictionsSessionControl, CloudAppSecuritySessionControl, ConditionalAccessSessionControl, PersistentBrowserSessionControl, SignInFrequencySessionControl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessSessionControl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.applicationEnforcedRestrictionsSessionControl":
                    return new ApplicationEnforcedRestrictionsSessionControl();
                case "#microsoft.graph.cloudAppSecuritySessionControl":
                    return new CloudAppSecuritySessionControl();
                case "#microsoft.graph.persistentBrowserSessionControl":
                    return new PersistentBrowserSessionControl();
                case "#microsoft.graph.signInFrequencySessionControl":
                    return new SignInFrequencySessionControl();
            }
        }
    }
    return new ConditionalAccessSessionControl();
}
