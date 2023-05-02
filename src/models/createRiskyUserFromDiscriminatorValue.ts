import {deserializeIntoRiskyUser} from './deserializeIntoRiskyUser';
import {deserializeIntoRiskyUserHistoryItem} from './deserializeIntoRiskyUserHistoryItem';
import {RiskyUser, RiskyUserHistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.riskyUserHistoryItem":
                    return deserializeIntoRiskyUserHistoryItem;
            }
        }
    }
    return deserializeIntoRiskyUser;
}
