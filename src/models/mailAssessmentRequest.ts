import {ThreatAssessmentRequest} from './index';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailAssessmentRequest extends ThreatAssessmentRequest implements Parsable {
    /** The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender, advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox, autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk. */
    private _destinationRoutingReason?: MailDestinationRoutingReason | undefined;
    /** The resource URI of the mail message for assessment. */
    private _messageUri?: string | undefined;
    /** The mail recipient whose policies are used to assess the mail. */
    private _recipientEmail?: string | undefined;
    /**
     * Instantiates a new MailAssessmentRequest and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.mailAssessmentRequest";
    };
    /**
     * Gets the destinationRoutingReason property value. The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender, advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox, autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk.
     * @returns a mailDestinationRoutingReason
     */
    public get destinationRoutingReason() {
        return this._destinationRoutingReason;
    };
    /**
     * Sets the destinationRoutingReason property value. The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender, advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox, autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk.
     * @param value Value to set for the destinationRoutingReason property.
     */
    public set destinationRoutingReason(value: MailDestinationRoutingReason | undefined) {
        this._destinationRoutingReason = value;
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
     * Gets the messageUri property value. The resource URI of the mail message for assessment.
     * @returns a string
     */
    public get messageUri() {
        return this._messageUri;
    };
    /**
     * Sets the messageUri property value. The resource URI of the mail message for assessment.
     * @param value Value to set for the messageUri property.
     */
    public set messageUri(value: string | undefined) {
        this._messageUri = value;
    };
    /**
     * Gets the recipientEmail property value. The mail recipient whose policies are used to assess the mail.
     * @returns a string
     */
    public get recipientEmail() {
        return this._recipientEmail;
    };
    /**
     * Sets the recipientEmail property value. The mail recipient whose policies are used to assess the mail.
     * @param value Value to set for the recipientEmail property.
     */
    public set recipientEmail(value: string | undefined) {
        this._recipientEmail = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<MailDestinationRoutingReason>("destinationRoutingReason", this.destinationRoutingReason);
        writer.writeStringValue("messageUri", this.messageUri);
        writer.writeStringValue("recipientEmail", this.recipientEmail);
    };
}
