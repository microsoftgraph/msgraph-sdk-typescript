import {MailClusterEvidence} from './mailClusterEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailClusterEvidence(writer: SerializationWriter, mailClusterEvidence: MailClusterEvidence | undefined = {} as MailClusterEvidence) : void {
        serializeAlertEvidence(writer, mailClusterEvidence)
        writer.writeStringValue("clusterBy", mailClusterEvidence.clusterBy);
        writer.writeStringValue("clusterByValue", mailClusterEvidence.clusterByValue);
        writer.writeNumberValue("emailCount", mailClusterEvidence.emailCount);
        writer.writeCollectionOfPrimitiveValues<string>("networkMessageIds", mailClusterEvidence.networkMessageIds);
        writer.writeStringValue("query", mailClusterEvidence.query);
        writer.writeStringValue("urn", mailClusterEvidence.urn);
}
