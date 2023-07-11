import {deserializeIntoHost} from './deserializeIntoHost';
import {deserializeIntoHostname} from './deserializeIntoHostname';
import {deserializeIntoIpAddress} from './deserializeIntoIpAddress';
import {Host, Hostname, IpAddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.hostname":
                    return deserializeIntoHostname;
                case "#microsoft.graph.security.ipAddress":
                    return deserializeIntoIpAddress;
            }
        }
    }
    return deserializeIntoHost;
}
