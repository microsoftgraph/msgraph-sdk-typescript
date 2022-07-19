import {ThreatAssessmentRequest} from './index';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmailFileAssessmentRequest extends ThreatAssessmentRequest implements Parsable {
    /** Base64 encoded .eml email file content. The file content cannot fetch back because it isn't stored. */
    private _contentData?: string | undefined;
    /** The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender, advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox, autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk. */
    private _destinationRoutingReason?: MailDestinationRoutingReason | undefined;
    /** The mail recipient whose policies are used to assess the mail. */
    private _recipientEmail?: string | undefined;
    /**
     * Instantiates a new EmailFileAssessmentRequest and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.emailFileAssessmentRequest";
    };
    /**
     * Gets the contentData property value. Base64 encoded .eml email file content. The file content cannot fetch back because it isn't stored.
     * @returns a string
     */
    public get contentData() {
        return this._contentData;
    };
    /**
     * Sets the contentData property value. Base64 encoded .eml email file content. The file content cannot fetch back because it isn't stored.
     * @param value Value to set for the contentData property.
     */
    public set contentData(value: string | undefined) {
        this._contentData = value;
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
            "contentData": n => { this.contentData = n.getStringValue(); },
            "destinationRoutingReason": n => { this.destinationRoutingReason = n.getEnumValue<MailDestinationRoutingReason>(MailDestinationRoutingReason); },
            "recipientEmail": n => { this.recipientEmail = n.getStringValue(); },
        };
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
        writer.writeStringValue("contentData", this.contentData);
        writer.writeEnumValue<MailDestinationRoutingReason>("destinationRoutingReason", this.destinationRoutingReason);
        writer.writeStringValue("recipientEmail", this.recipientEmail);
    };
}
