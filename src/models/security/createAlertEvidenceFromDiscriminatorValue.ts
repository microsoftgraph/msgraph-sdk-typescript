import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {deserializeIntoAmazonResourceEvidence} from './deserializeIntoAmazonResourceEvidence';
import {deserializeIntoAnalyzedMessageEvidence} from './deserializeIntoAnalyzedMessageEvidence';
import {deserializeIntoAzureResourceEvidence} from './deserializeIntoAzureResourceEvidence';
import {deserializeIntoDeviceEvidence} from './deserializeIntoDeviceEvidence';
import {deserializeIntoFileEvidence} from './deserializeIntoFileEvidence';
import {deserializeIntoGoogleCloudResourceEvidence} from './deserializeIntoGoogleCloudResourceEvidence';
import {deserializeIntoIpEvidence} from './deserializeIntoIpEvidence';
import {deserializeIntoMailboxEvidence} from './deserializeIntoMailboxEvidence';
import {deserializeIntoMailClusterEvidence} from './deserializeIntoMailClusterEvidence';
import {deserializeIntoOauthApplicationEvidence} from './deserializeIntoOauthApplicationEvidence';
import {deserializeIntoProcessEvidence} from './deserializeIntoProcessEvidence';
import {deserializeIntoRegistryKeyEvidence} from './deserializeIntoRegistryKeyEvidence';
import {deserializeIntoRegistryValueEvidence} from './deserializeIntoRegistryValueEvidence';
import {deserializeIntoSecurityGroupEvidence} from './deserializeIntoSecurityGroupEvidence';
import {deserializeIntoUrlEvidence} from './deserializeIntoUrlEvidence';
import {deserializeIntoUserEvidence} from './deserializeIntoUserEvidence';
import {AlertEvidence, AmazonResourceEvidence, AnalyzedMessageEvidence, AzureResourceEvidence, DeviceEvidence, FileEvidence, GoogleCloudResourceEvidence, IpEvidence, MailboxEvidence, MailClusterEvidence, OauthApplicationEvidence, ProcessEvidence, RegistryKeyEvidence, RegistryValueEvidence, SecurityGroupEvidence, UrlEvidence, UserEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.amazonResourceEvidence":
                    return deserializeIntoAmazonResourceEvidence;
                case "#microsoft.graph.security.analyzedMessageEvidence":
                    return deserializeIntoAnalyzedMessageEvidence;
                case "#microsoft.graph.security.azureResourceEvidence":
                    return deserializeIntoAzureResourceEvidence;
                case "#microsoft.graph.security.deviceEvidence":
                    return deserializeIntoDeviceEvidence;
                case "#microsoft.graph.security.fileEvidence":
                    return deserializeIntoFileEvidence;
                case "#microsoft.graph.security.googleCloudResourceEvidence":
                    return deserializeIntoGoogleCloudResourceEvidence;
                case "#microsoft.graph.security.ipEvidence":
                    return deserializeIntoIpEvidence;
                case "#microsoft.graph.security.mailboxEvidence":
                    return deserializeIntoMailboxEvidence;
                case "#microsoft.graph.security.mailClusterEvidence":
                    return deserializeIntoMailClusterEvidence;
                case "#microsoft.graph.security.oauthApplicationEvidence":
                    return deserializeIntoOauthApplicationEvidence;
                case "#microsoft.graph.security.processEvidence":
                    return deserializeIntoProcessEvidence;
                case "#microsoft.graph.security.registryKeyEvidence":
                    return deserializeIntoRegistryKeyEvidence;
                case "#microsoft.graph.security.registryValueEvidence":
                    return deserializeIntoRegistryValueEvidence;
                case "#microsoft.graph.security.securityGroupEvidence":
                    return deserializeIntoSecurityGroupEvidence;
                case "#microsoft.graph.security.urlEvidence":
                    return deserializeIntoUrlEvidence;
                case "#microsoft.graph.security.userEvidence":
                    return deserializeIntoUserEvidence;
            }
        }
    }
    return deserializeIntoAlertEvidence;
}
