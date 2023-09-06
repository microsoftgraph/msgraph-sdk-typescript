import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type MailClusterEvidence } from './mailClusterEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMailClusterEvidence(mailClusterEvidence: MailClusterEvidence | undefined = {} as MailClusterEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(mailClusterEvidence),
        "clusterBy": n => { mailClusterEvidence.clusterBy = n.getStringValue(); },
        "clusterByValue": n => { mailClusterEvidence.clusterByValue = n.getStringValue(); },
        "emailCount": n => { mailClusterEvidence.emailCount = n.getNumberValue(); },
        "networkMessageIds": n => { mailClusterEvidence.networkMessageIds = n.getCollectionOfPrimitiveValues<string>(); },
        "query": n => { mailClusterEvidence.query = n.getStringValue(); },
        "urn": n => { mailClusterEvidence.urn = n.getStringValue(); },
    }
}
