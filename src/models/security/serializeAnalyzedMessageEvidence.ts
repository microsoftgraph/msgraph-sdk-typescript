import {AnalyzedMessageEvidence} from './analyzedMessageEvidence';
import {EmailSender} from './emailSender';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeEmailSender} from './serializeEmailSender';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAnalyzedMessageEvidence(writer: SerializationWriter, analyzedMessageEvidence: AnalyzedMessageEvidence | undefined = {} as AnalyzedMessageEvidence) : void {
        serializeAlertEvidence(writer, analyzedMessageEvidence)
        writer.writeStringValue("antiSpamDirection", analyzedMessageEvidence.antiSpamDirection);
        writer.writeNumberValue("attachmentsCount", analyzedMessageEvidence.attachmentsCount);
        writer.writeStringValue("deliveryAction", analyzedMessageEvidence.deliveryAction);
        writer.writeStringValue("deliveryLocation", analyzedMessageEvidence.deliveryLocation);
        writer.writeStringValue("internetMessageId", analyzedMessageEvidence.internetMessageId);
        writer.writeStringValue("language", analyzedMessageEvidence.language);
        writer.writeStringValue("networkMessageId", analyzedMessageEvidence.networkMessageId);
        writer.writeObjectValue<EmailSender>("p1Sender", analyzedMessageEvidence.p1Sender, serializeEmailSender);
        writer.writeObjectValue<EmailSender>("p2Sender", analyzedMessageEvidence.p2Sender, serializeEmailSender);
        writer.writeDateValue("receivedDateTime", analyzedMessageEvidence.receivedDateTime);
        writer.writeStringValue("recipientEmailAddress", analyzedMessageEvidence.recipientEmailAddress);
        writer.writeStringValue("senderIp", analyzedMessageEvidence.senderIp);
        writer.writeStringValue("subject", analyzedMessageEvidence.subject);
        writer.writeCollectionOfPrimitiveValues<string>("threatDetectionMethods", analyzedMessageEvidence.threatDetectionMethods);
        writer.writeCollectionOfPrimitiveValues<string>("threats", analyzedMessageEvidence.threats);
        writer.writeNumberValue("urlCount", analyzedMessageEvidence.urlCount);
        writer.writeCollectionOfPrimitiveValues<string>("urls", analyzedMessageEvidence.urls);
        writer.writeStringValue("urn", analyzedMessageEvidence.urn);
}
