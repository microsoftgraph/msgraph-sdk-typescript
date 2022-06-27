import {ThreatAssessmentRequestImpl} from './index';
import {MailAssessmentRequest} from './mailAssessmentRequest';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailAssessmentRequestImpl extends ThreatAssessmentRequestImpl implements MailAssessmentRequest {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender, advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox, autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk. */
    public destinationRoutingReason?: MailDestinationRoutingReason | undefined;
    /** The resource URI of the mail message for assessment. */
    public messageUri?: string | undefined;
    /** The mail recipient whose policies are used to assess the mail. */
    public recipientEmail?: string | undefined;
    /**
     * Instantiates a new MailAssessmentRequest and sets the default values.
     * @param mailAssessmentRequestParameterValue 
     */
    public constructor(mailAssessmentRequestParameterValue?: MailAssessmentRequest | undefined) {
        super(mailAssessmentRequestParameterValue);
        this.additionalData = mailAssessmentRequestParameterValue?.additionalData ? mailAssessmentRequestParameterValue?.additionalData! : {};
        this.destinationRoutingReason = mailAssessmentRequestParameterValue?.destinationRoutingReason;
        this.messageUri = mailAssessmentRequestParameterValue?.messageUri;
        this.recipientEmail = mailAssessmentRequestParameterValue?.recipientEmail;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "destinationRoutingReason": n => { this.destinationRoutingReason = n.getEnumValue<MailDestinationRoutingReason>(MailDestinationRoutingReason); },
            "messageUri": n => { this.messageUri = n.getStringValue(); },
            "recipientEmail": n => { this.recipientEmail = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.destinationRoutingReason){
            writer.writeEnumValue<MailDestinationRoutingReason>("destinationRoutingReason", this.destinationRoutingReason);
        }
        if(this.messageUri){
            writer.writeStringValue("messageUri", this.messageUri);
        }
        if(this.recipientEmail){
            writer.writeStringValue("recipientEmail", this.recipientEmail);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
