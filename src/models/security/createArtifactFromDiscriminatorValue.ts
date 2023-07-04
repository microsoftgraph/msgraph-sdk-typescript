import {deserializeIntoArtifact} from './deserializeIntoArtifact';
import {deserializeIntoHost} from './deserializeIntoHost';
import {deserializeIntoHostComponent} from './deserializeIntoHostComponent';
import {deserializeIntoHostCookie} from './deserializeIntoHostCookie';
import {deserializeIntoHostname} from './deserializeIntoHostname';
import {deserializeIntoHostTracker} from './deserializeIntoHostTracker';
import {deserializeIntoIpAddress} from './deserializeIntoIpAddress';
import {deserializeIntoPassiveDnsRecord} from './deserializeIntoPassiveDnsRecord';
import {deserializeIntoUnclassifiedArtifact} from './deserializeIntoUnclassifiedArtifact';
import {Artifact, Host, HostComponent, HostCookie, Hostname, HostTracker, IpAddress, PassiveDnsRecord, UnclassifiedArtifact} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArtifactFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.host":
                    return deserializeIntoHost;
                case "#microsoft.graph.security.hostComponent":
                    return deserializeIntoHostComponent;
                case "#microsoft.graph.security.hostCookie":
                    return deserializeIntoHostCookie;
                case "#microsoft.graph.security.hostname":
                    return deserializeIntoHostname;
                case "#microsoft.graph.security.hostTracker":
                    return deserializeIntoHostTracker;
                case "#microsoft.graph.security.ipAddress":
                    return deserializeIntoIpAddress;
                case "#microsoft.graph.security.passiveDnsRecord":
                    return deserializeIntoPassiveDnsRecord;
                case "#microsoft.graph.security.unclassifiedArtifact":
                    return deserializeIntoUnclassifiedArtifact;
            }
        }
    }
    return deserializeIntoArtifact;
}
