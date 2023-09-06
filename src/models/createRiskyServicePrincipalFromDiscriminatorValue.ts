import { deserializeIntoRiskyServicePrincipal } from './deserializeIntoRiskyServicePrincipal';
import { deserializeIntoRiskyServicePrincipalHistoryItem } from './deserializeIntoRiskyServicePrincipalHistoryItem';
import { type RiskyServicePrincipal, type RiskyServicePrincipalHistoryItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

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
