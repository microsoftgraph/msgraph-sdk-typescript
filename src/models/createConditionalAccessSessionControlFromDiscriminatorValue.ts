import {deserializeIntoApplicationEnforcedRestrictionsSessionControl} from './deserializeIntoApplicationEnforcedRestrictionsSessionControl';
import {deserializeIntoCloudAppSecuritySessionControl} from './deserializeIntoCloudAppSecuritySessionControl';
import {deserializeIntoConditionalAccessSessionControl} from './deserializeIntoConditionalAccessSessionControl';
import {deserializeIntoPersistentBrowserSessionControl} from './deserializeIntoPersistentBrowserSessionControl';
import {deserializeIntoSignInFrequencySessionControl} from './deserializeIntoSignInFrequencySessionControl';
import {ApplicationEnforcedRestrictionsSessionControl, CloudAppSecuritySessionControl, ConditionalAccessSessionControl, PersistentBrowserSessionControl, SignInFrequencySessionControl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.applicationEnforcedRestrictionsSessionControl":
                    return deserializeIntoApplicationEnforcedRestrictionsSessionControl;
                case "#microsoft.graph.cloudAppSecuritySessionControl":
                    return deserializeIntoCloudAppSecuritySessionControl;
                case "#microsoft.graph.persistentBrowserSessionControl":
                    return deserializeIntoPersistentBrowserSessionControl;
                case "#microsoft.graph.signInFrequencySessionControl":
                    return deserializeIntoSignInFrequencySessionControl;
            }
        }
    }
    return deserializeIntoConditionalAccessSessionControl;
}
