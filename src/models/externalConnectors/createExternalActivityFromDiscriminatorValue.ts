import {deserializeIntoExternalActivity} from './deserializeIntoExternalActivity';
import {deserializeIntoExternalActivityResult} from './deserializeIntoExternalActivityResult';
import {ExternalActivity, ExternalActivityResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.externalConnectors.externalActivityResult":
                    return deserializeIntoExternalActivityResult;
            }
        }
    }
    return deserializeIntoExternalActivity;
}
