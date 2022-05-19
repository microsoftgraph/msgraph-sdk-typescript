import {StsPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StsPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.stsPolicy":
                    return new StsPolicy();
            }
        }
    }
    return new StsPolicy();
}
