import {deserializeIntoClientUserAgent} from './deserializeIntoClientUserAgent';
import {deserializeIntoServiceUserAgent} from './deserializeIntoServiceUserAgent';
import {deserializeIntoUserAgent} from './deserializeIntoUserAgent';
import {ClientUserAgent, ServiceUserAgent, UserAgent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.callRecords.clientUserAgent":
                    return deserializeIntoClientUserAgent;
                case "#microsoft.graph.callRecords.serviceUserAgent":
                    return deserializeIntoServiceUserAgent;
            }
        }
    }
    return deserializeIntoUserAgent;
}
