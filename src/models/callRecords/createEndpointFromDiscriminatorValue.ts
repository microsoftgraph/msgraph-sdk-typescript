import {Endpoint, ParticipantEndpoint, ServiceEndpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : Endpoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.callRecords.participantEndpoint":
                    return new ParticipantEndpoint();
                case "#microsoft.graph.callRecords.serviceEndpoint":
                    return new ServiceEndpoint();
            }
        }
    }
    return new Endpoint();
}
