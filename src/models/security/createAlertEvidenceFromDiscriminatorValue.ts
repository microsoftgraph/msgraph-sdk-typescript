import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {deserializeIntoAmazonResourceEvidence} from './deserializeIntoAmazonResourceEvidence';
import {deserializeIntoAnalyzedMessageEvidence} from './deserializeIntoAnalyzedMessageEvidence';
import {deserializeIntoAzureResourceEvidence} from './deserializeIntoAzureResourceEvidence';
import {deserializeIntoBlobContainerEvidence} from './deserializeIntoBlobContainerEvidence';
import {deserializeIntoBlobEvidence} from './deserializeIntoBlobEvidence';
import {deserializeIntoCloudApplicationEvidence} from './deserializeIntoCloudApplicationEvidence';
import {deserializeIntoContainerEvidence} from './deserializeIntoContainerEvidence';
import {deserializeIntoContainerImageEvidence} from './deserializeIntoContainerImageEvidence';
import {deserializeIntoContainerRegistryEvidence} from './deserializeIntoContainerRegistryEvidence';
import {deserializeIntoDeviceEvidence} from './deserializeIntoDeviceEvidence';
import {deserializeIntoFileEvidence} from './deserializeIntoFileEvidence';
import {deserializeIntoGoogleCloudResourceEvidence} from './deserializeIntoGoogleCloudResourceEvidence';
import {deserializeIntoIpEvidence} from './deserializeIntoIpEvidence';
import {deserializeIntoKubernetesClusterEvidence} from './deserializeIntoKubernetesClusterEvidence';
import {deserializeIntoKubernetesControllerEvidence} from './deserializeIntoKubernetesControllerEvidence';
import {deserializeIntoKubernetesNamespaceEvidence} from './deserializeIntoKubernetesNamespaceEvidence';
import {deserializeIntoKubernetesPodEvidence} from './deserializeIntoKubernetesPodEvidence';
import {deserializeIntoKubernetesSecretEvidence} from './deserializeIntoKubernetesSecretEvidence';
import {deserializeIntoKubernetesServiceAccountEvidence} from './deserializeIntoKubernetesServiceAccountEvidence';
import {deserializeIntoKubernetesServiceEvidence} from './deserializeIntoKubernetesServiceEvidence';
import {deserializeIntoMailboxEvidence} from './deserializeIntoMailboxEvidence';
import {deserializeIntoMailClusterEvidence} from './deserializeIntoMailClusterEvidence';
import {deserializeIntoOauthApplicationEvidence} from './deserializeIntoOauthApplicationEvidence';
import {deserializeIntoProcessEvidence} from './deserializeIntoProcessEvidence';
import {deserializeIntoRegistryKeyEvidence} from './deserializeIntoRegistryKeyEvidence';
import {deserializeIntoRegistryValueEvidence} from './deserializeIntoRegistryValueEvidence';
import {deserializeIntoSecurityGroupEvidence} from './deserializeIntoSecurityGroupEvidence';
import {deserializeIntoUrlEvidence} from './deserializeIntoUrlEvidence';
import {deserializeIntoUserEvidence} from './deserializeIntoUserEvidence';
import {AlertEvidence, AmazonResourceEvidence, AnalyzedMessageEvidence, AzureResourceEvidence, BlobContainerEvidence, BlobEvidence, CloudApplicationEvidence, ContainerEvidence, ContainerImageEvidence, ContainerRegistryEvidence, DeviceEvidence, FileEvidence, GoogleCloudResourceEvidence, IpEvidence, KubernetesClusterEvidence, KubernetesControllerEvidence, KubernetesNamespaceEvidence, KubernetesPodEvidence, KubernetesSecretEvidence, KubernetesServiceAccountEvidence, KubernetesServiceEvidence, MailboxEvidence, MailClusterEvidence, OauthApplicationEvidence, ProcessEvidence, RegistryKeyEvidence, RegistryValueEvidence, SecurityGroupEvidence, UrlEvidence, UserEvidence} from './index';
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
                case "#microsoft.graph.security.blobContainerEvidence":
                    return deserializeIntoBlobContainerEvidence;
                case "#microsoft.graph.security.blobEvidence":
                    return deserializeIntoBlobEvidence;
                case "#microsoft.graph.security.cloudApplicationEvidence":
                    return deserializeIntoCloudApplicationEvidence;
                case "#microsoft.graph.security.containerEvidence":
                    return deserializeIntoContainerEvidence;
                case "#microsoft.graph.security.containerImageEvidence":
                    return deserializeIntoContainerImageEvidence;
                case "#microsoft.graph.security.containerRegistryEvidence":
                    return deserializeIntoContainerRegistryEvidence;
                case "#microsoft.graph.security.deviceEvidence":
                    return deserializeIntoDeviceEvidence;
                case "#microsoft.graph.security.fileEvidence":
                    return deserializeIntoFileEvidence;
                case "#microsoft.graph.security.googleCloudResourceEvidence":
                    return deserializeIntoGoogleCloudResourceEvidence;
                case "#microsoft.graph.security.ipEvidence":
                    return deserializeIntoIpEvidence;
                case "#microsoft.graph.security.kubernetesClusterEvidence":
                    return deserializeIntoKubernetesClusterEvidence;
                case "#microsoft.graph.security.kubernetesControllerEvidence":
                    return deserializeIntoKubernetesControllerEvidence;
                case "#microsoft.graph.security.kubernetesNamespaceEvidence":
                    return deserializeIntoKubernetesNamespaceEvidence;
                case "#microsoft.graph.security.kubernetesPodEvidence":
                    return deserializeIntoKubernetesPodEvidence;
                case "#microsoft.graph.security.kubernetesSecretEvidence":
                    return deserializeIntoKubernetesSecretEvidence;
                case "#microsoft.graph.security.kubernetesServiceAccountEvidence":
                    return deserializeIntoKubernetesServiceAccountEvidence;
                case "#microsoft.graph.security.kubernetesServiceEvidence":
                    return deserializeIntoKubernetesServiceEvidence;
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
