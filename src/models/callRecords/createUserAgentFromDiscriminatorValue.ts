import {ClientUserAgent, ServiceUserAgent, UserAgent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserAgent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.callRecords.clientUserAgent":
                    return new ClientUserAgent();
                case "#microsoft.graph.callRecords.serviceUserAgent":
                    return new ServiceUserAgent();
            }
        }
    }
    return new UserAgent();
}
