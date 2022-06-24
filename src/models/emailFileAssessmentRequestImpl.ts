import {EmailFileAssessmentRequest} from './emailFileAssessmentRequest';
import {ThreatAssessmentRequestImpl} from './index';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmailFileAssessmentRequestImpl extends ThreatAssessmentRequestImpl implements EmailFileAssessmentRequest {
    /** Base64 encoded .eml email file content. The file content cannot fetch back because it isn't stored. */
    public contentData?: string | undefined;
    /** The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender, advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox, autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk. */
    public destinationRoutingReason?: MailDestinationRoutingReason | undefined;
    /** The mail recipient whose policies are used to assess the mail. */
    public recipientEmail?: string | undefined;
    /**
     * Instantiates a new EmailFileAssessmentRequest and sets the default values.
     * @param emailFileAssessmentRequestParameterValue 
     */
    public constructor(emailFileAssessmentRequestParameterValue?: EmailFileAssessmentRequest | undefined) {
        super(emailFileAssessmentRequestParameterValue);
        this.contentData = emailFileAssessmentRequestParameterValue?.contentData;
        this.destinationRoutingReason = emailFileAssessmentRequestParameterValue?.destinationRoutingReason;
        this.recipientEmail = emailFileAssessmentRequestParameterValue?.recipientEmail;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentData": n => { this.contentData = n.getStringValue(); },
            "destinationRoutingReason": n => { this.destinationRoutingReason = n.getEnumValue<MailDestinationRoutingReason>(MailDestinationRoutingReason); },
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
        if(this.contentData){
            writer.writeStringValue("contentData", this.contentData);
        }
        if(this.destinationRoutingReason){
            writer.writeEnumValue<MailDestinationRoutingReason>("destinationRoutingReason", this.destinationRoutingReason);
        }
        if(this.recipientEmail){
            writer.writeStringValue("recipientEmail", this.recipientEmail);
        }
    };
}
