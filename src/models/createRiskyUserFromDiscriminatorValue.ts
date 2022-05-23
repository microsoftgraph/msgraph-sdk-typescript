import {RiskyUserImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyUserImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.riskyUser":
                    return new RiskyUserImpl();
            }
        }
    }
    return new RiskyUserImpl();
}
