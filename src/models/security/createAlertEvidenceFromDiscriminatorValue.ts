import {AlertEvidence, AnalyzedMessageEvidence, CloudApplicationEvidence, DeviceEvidence, FileEvidence, IpEvidence, MailboxEvidence, MailClusterEvidence, OauthApplicationEvidence, ProcessEvidence, RegistryKeyEvidence, RegistryValueEvidence, SecurityGroupEvidence, UrlEvidence, UserEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.analyzedMessageEvidence":
                    return new AnalyzedMessageEvidence();
                case "#microsoft.graph.security.cloudApplicationEvidence":
                    return new CloudApplicationEvidence();
                case "#microsoft.graph.security.deviceEvidence":
                    return new DeviceEvidence();
                case "#microsoft.graph.security.fileEvidence":
                    return new FileEvidence();
                case "#microsoft.graph.security.ipEvidence":
                    return new IpEvidence();
                case "#microsoft.graph.security.mailboxEvidence":
                    return new MailboxEvidence();
                case "#microsoft.graph.security.mailClusterEvidence":
                    return new MailClusterEvidence();
                case "#microsoft.graph.security.oauthApplicationEvidence":
                    return new OauthApplicationEvidence();
                case "#microsoft.graph.security.processEvidence":
                    return new ProcessEvidence();
                case "#microsoft.graph.security.registryKeyEvidence":
                    return new RegistryKeyEvidence();
                case "#microsoft.graph.security.registryValueEvidence":
                    return new RegistryValueEvidence();
                case "#microsoft.graph.security.securityGroupEvidence":
                    return new SecurityGroupEvidence();
                case "#microsoft.graph.security.urlEvidence":
                    return new UrlEvidence();
                case "#microsoft.graph.security.userEvidence":
                    return new UserEvidence();
            }
        }
    }
    return new AlertEvidence();
}
