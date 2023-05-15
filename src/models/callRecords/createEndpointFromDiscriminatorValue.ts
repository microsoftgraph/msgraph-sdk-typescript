import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {deserializeIntoParticipantEndpoint} from './deserializeIntoParticipantEndpoint';
import {deserializeIntoServiceEndpoint} from './deserializeIntoServiceEndpoint';
import {Endpoint, ParticipantEndpoint, ServiceEndpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.callRecords.participantEndpoint":
                    return deserializeIntoParticipantEndpoint;
                case "#microsoft.graph.callRecords.serviceEndpoint":
                    return deserializeIntoServiceEndpoint;
            }
        }
    }
    return deserializeIntoEndpoint;
}
