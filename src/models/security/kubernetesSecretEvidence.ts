import type {AlertEvidence} from './alertEvidence';
import type {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesSecretEvidence extends AlertEvidence, Parsable {
    /**
     * The secret name.
     */
    name?: string | undefined;
    /**
     * The secret namespace.
     */
    namespace?: KubernetesNamespaceEvidence | undefined;
    /**
     * The secret type can include both built-in types and custom ones. Examples of built-in types are: Opaque, kubernetes.io/service-account-token, kubernetes.io/dockercfg, kubernetes.io/dockerconfigjson, kubernetes.io/basic-auth, kubernetes.io/ssh-auth, kubernetes.io/tls, bootstrap.kubernetes.io/token.
     */
    secretType?: string | undefined;
}
