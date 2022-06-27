import {ApplicationEnforcedRestrictionsSessionControlImpl, CloudAppSecuritySessionControlImpl, ConditionalAccessSessionControlImpl, PersistentBrowserSessionControlImpl, SignInFrequencySessionControlImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessSessionControlImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.applicationEnforcedRestrictionsSessionControl":
                    return new ApplicationEnforcedRestrictionsSessionControlImpl();
                case "#microsoft.graph.cloudAppSecuritySessionControl":
                    return new CloudAppSecuritySessionControlImpl();
                case "#microsoft.graph.persistentBrowserSessionControl":
                    return new PersistentBrowserSessionControlImpl();
                case "#microsoft.graph.signInFrequencySessionControl":
                    return new SignInFrequencySessionControlImpl();
            }
        }
    }
    return new ConditionalAccessSessionControlImpl();
}
