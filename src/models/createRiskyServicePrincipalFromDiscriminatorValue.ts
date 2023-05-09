import {deserializeIntoRiskyServicePrincipal} from './deserializeIntoRiskyServicePrincipal';
import {deserializeIntoRiskyServicePrincipalHistoryItem} from './deserializeIntoRiskyServicePrincipalHistoryItem';
import {RiskyServicePrincipal, RiskyServicePrincipalHistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.riskyServicePrincipalHistoryItem":
                    return deserializeIntoRiskyServicePrincipalHistoryItem;
            }
        }
    }
    return deserializeIntoRiskyServicePrincipal;
}
