import {AnalyzedMessageEvidence} from './analyzedMessageEvidence';
import {createEmailSenderFromDiscriminatorValue} from './createEmailSenderFromDiscriminatorValue';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {EmailSender} from './emailSender';
import {serializeEmailSender} from './serializeEmailSender';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAnalyzedMessageEvidence(analyzedMessageEvidence: AnalyzedMessageEvidence | undefined = {} as AnalyzedMessageEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(analyzedMessageEvidence),
        "antiSpamDirection": n => { analyzedMessageEvidence.antiSpamDirection = n.getStringValue(); },
        "attachmentsCount": n => { analyzedMessageEvidence.attachmentsCount = n.getNumberValue(); },
        "deliveryAction": n => { analyzedMessageEvidence.deliveryAction = n.getStringValue(); },
        "deliveryLocation": n => { analyzedMessageEvidence.deliveryLocation = n.getStringValue(); },
        "internetMessageId": n => { analyzedMessageEvidence.internetMessageId = n.getStringValue(); },
        "language": n => { analyzedMessageEvidence.language = n.getStringValue(); },
        "networkMessageId": n => { analyzedMessageEvidence.networkMessageId = n.getStringValue(); },
        "p1Sender": n => { analyzedMessageEvidence.p1Sender = n.getObjectValue<EmailSender>(createEmailSenderFromDiscriminatorValue); },
        "p2Sender": n => { analyzedMessageEvidence.p2Sender = n.getObjectValue<EmailSender>(createEmailSenderFromDiscriminatorValue); },
        "receivedDateTime": n => { analyzedMessageEvidence.receivedDateTime = n.getDateValue(); },
        "recipientEmailAddress": n => { analyzedMessageEvidence.recipientEmailAddress = n.getStringValue(); },
        "senderIp": n => { analyzedMessageEvidence.senderIp = n.getStringValue(); },
        "subject": n => { analyzedMessageEvidence.subject = n.getStringValue(); },
        "threatDetectionMethods": n => { analyzedMessageEvidence.threatDetectionMethods = n.getCollectionOfPrimitiveValues<string>(); },
        "threats": n => { analyzedMessageEvidence.threats = n.getCollectionOfPrimitiveValues<string>(); },
        "urlCount": n => { analyzedMessageEvidence.urlCount = n.getNumberValue(); },
        "urls": n => { analyzedMessageEvidence.urls = n.getCollectionOfPrimitiveValues<string>(); },
        "urn": n => { analyzedMessageEvidence.urn = n.getStringValue(); },
    }
}
