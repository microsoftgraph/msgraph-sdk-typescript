import {RiskyServicePrincipal, RiskyServicePrincipalHistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyServicePrincipal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.riskyServicePrincipalHistoryItem":
                    return new RiskyServicePrincipalHistoryItem();
            }
        }
    }
    return new RiskyServicePrincipal();
}
