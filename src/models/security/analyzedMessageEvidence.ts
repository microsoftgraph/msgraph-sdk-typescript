import {createEmailSenderFromDiscriminatorValue} from './createEmailSenderFromDiscriminatorValue';
import {AlertEvidence, EmailSender} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AnalyzedMessageEvidence extends AlertEvidence implements Parsable {
    /** The antiSpamDirection property */
    private _antiSpamDirection?: string | undefined;
    /** The attachmentsCount property */
    private _attachmentsCount?: number | undefined;
    /** The deliveryAction property */
    private _deliveryAction?: string | undefined;
    /** The deliveryLocation property */
    private _deliveryLocation?: string | undefined;
    /** The internetMessageId property */
    private _internetMessageId?: string | undefined;
    /** The language property */
    private _language?: string | undefined;
    /** The networkMessageId property */
    private _networkMessageId?: string | undefined;
    /** The p1Sender property */
    private _p1Sender?: EmailSender | undefined;
    /** The p2Sender property */
    private _p2Sender?: EmailSender | undefined;
    /** The receivedDateTime property */
    private _receivedDateTime?: Date | undefined;
    /** The recipientEmailAddress property */
    private _recipientEmailAddress?: string | undefined;
    /** The senderIp property */
    private _senderIp?: string | undefined;
    /** The subject property */
    private _subject?: string | undefined;
    /** The threatDetectionMethods property */
    private _threatDetectionMethods?: string[] | undefined;
    /** The threats property */
    private _threats?: string[] | undefined;
    /** The urlCount property */
    private _urlCount?: number | undefined;
    /** The urls property */
    private _urls?: string[] | undefined;
    /** The urn property */
    private _urn?: string | undefined;
    /**
     * Gets the antiSpamDirection property value. The antiSpamDirection property
     * @returns a string
     */
    public get antiSpamDirection() {
        return this._antiSpamDirection;
    };
    /**
     * Sets the antiSpamDirection property value. The antiSpamDirection property
     * @param value Value to set for the antiSpamDirection property.
     */
    public set antiSpamDirection(value: string | undefined) {
        this._antiSpamDirection = value;
    };
    /**
     * Gets the attachmentsCount property value. The attachmentsCount property
     * @returns a int64
     */
    public get attachmentsCount() {
        return this._attachmentsCount;
    };
    /**
     * Sets the attachmentsCount property value. The attachmentsCount property
     * @param value Value to set for the attachmentsCount property.
     */
    public set attachmentsCount(value: number | undefined) {
        this._attachmentsCount = value;
    };
    /**
     * Instantiates a new AnalyzedMessageEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deliveryAction property value. The deliveryAction property
     * @returns a string
     */
    public get deliveryAction() {
        return this._deliveryAction;
    };
    /**
     * Sets the deliveryAction property value. The deliveryAction property
     * @param value Value to set for the deliveryAction property.
     */
    public set deliveryAction(value: string | undefined) {
        this._deliveryAction = value;
    };
    /**
     * Gets the deliveryLocation property value. The deliveryLocation property
     * @returns a string
     */
    public get deliveryLocation() {
        return this._deliveryLocation;
    };
    /**
     * Sets the deliveryLocation property value. The deliveryLocation property
     * @param value Value to set for the deliveryLocation property.
     */
    public set deliveryLocation(value: string | undefined) {
        this._deliveryLocation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "antiSpamDirection": n => { this.antiSpamDirection = n.getStringValue(); },
            "attachmentsCount": n => { this.attachmentsCount = n.getNumberValue(); },
            "deliveryAction": n => { this.deliveryAction = n.getStringValue(); },
            "deliveryLocation": n => { this.deliveryLocation = n.getStringValue(); },
            "internetMessageId": n => { this.internetMessageId = n.getStringValue(); },
            "language": n => { this.language = n.getStringValue(); },
            "networkMessageId": n => { this.networkMessageId = n.getStringValue(); },
            "p1Sender": n => { this.p1Sender = n.getObjectValue<EmailSender>(createEmailSenderFromDiscriminatorValue); },
            "p2Sender": n => { this.p2Sender = n.getObjectValue<EmailSender>(createEmailSenderFromDiscriminatorValue); },
            "receivedDateTime": n => { this.receivedDateTime = n.getDateValue(); },
            "recipientEmailAddress": n => { this.recipientEmailAddress = n.getStringValue(); },
            "senderIp": n => { this.senderIp = n.getStringValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
            "threatDetectionMethods": n => { this.threatDetectionMethods = n.getCollectionOfPrimitiveValues<string>(); },
            "threats": n => { this.threats = n.getCollectionOfPrimitiveValues<string>(); },
            "urlCount": n => { this.urlCount = n.getNumberValue(); },
            "urls": n => { this.urls = n.getCollectionOfPrimitiveValues<string>(); },
            "urn": n => { this.urn = n.getStringValue(); },
        };
    };
    /**
     * Gets the internetMessageId property value. The internetMessageId property
     * @returns a string
     */
    public get internetMessageId() {
        return this._internetMessageId;
    };
    /**
     * Sets the internetMessageId property value. The internetMessageId property
     * @param value Value to set for the internetMessageId property.
     */
    public set internetMessageId(value: string | undefined) {
        this._internetMessageId = value;
    };
    /**
     * Gets the language property value. The language property
     * @returns a string
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. The language property
     * @param value Value to set for the language property.
     */
    public set language(value: string | undefined) {
        this._language = value;
    };
    /**
     * Gets the networkMessageId property value. The networkMessageId property
     * @returns a string
     */
    public get networkMessageId() {
        return this._networkMessageId;
    };
    /**
     * Sets the networkMessageId property value. The networkMessageId property
     * @param value Value to set for the networkMessageId property.
     */
    public set networkMessageId(value: string | undefined) {
        this._networkMessageId = value;
    };
    /**
     * Gets the p1Sender property value. The p1Sender property
     * @returns a emailSender
     */
    public get p1Sender() {
        return this._p1Sender;
    };
    /**
     * Sets the p1Sender property value. The p1Sender property
     * @param value Value to set for the p1Sender property.
     */
    public set p1Sender(value: EmailSender | undefined) {
        this._p1Sender = value;
    };
    /**
     * Gets the p2Sender property value. The p2Sender property
     * @returns a emailSender
     */
    public get p2Sender() {
        return this._p2Sender;
    };
    /**
     * Sets the p2Sender property value. The p2Sender property
     * @param value Value to set for the p2Sender property.
     */
    public set p2Sender(value: EmailSender | undefined) {
        this._p2Sender = value;
    };
    /**
     * Gets the receivedDateTime property value. The receivedDateTime property
     * @returns a Date
     */
    public get receivedDateTime() {
        return this._receivedDateTime;
    };
    /**
     * Sets the receivedDateTime property value. The receivedDateTime property
     * @param value Value to set for the receivedDateTime property.
     */
    public set receivedDateTime(value: Date | undefined) {
        this._receivedDateTime = value;
    };
    /**
     * Gets the recipientEmailAddress property value. The recipientEmailAddress property
     * @returns a string
     */
    public get recipientEmailAddress() {
        return this._recipientEmailAddress;
    };
    /**
     * Sets the recipientEmailAddress property value. The recipientEmailAddress property
     * @param value Value to set for the recipientEmailAddress property.
     */
    public set recipientEmailAddress(value: string | undefined) {
        this._recipientEmailAddress = value;
    };
    /**
     * Gets the senderIp property value. The senderIp property
     * @returns a string
     */
    public get senderIp() {
        return this._senderIp;
    };
    /**
     * Sets the senderIp property value. The senderIp property
     * @param value Value to set for the senderIp property.
     */
    public set senderIp(value: string | undefined) {
        this._senderIp = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("antiSpamDirection", this.antiSpamDirection);
        writer.writeNumberValue("attachmentsCount", this.attachmentsCount);
        writer.writeStringValue("deliveryAction", this.deliveryAction);
        writer.writeStringValue("deliveryLocation", this.deliveryLocation);
        writer.writeStringValue("internetMessageId", this.internetMessageId);
        writer.writeStringValue("language", this.language);
        writer.writeStringValue("networkMessageId", this.networkMessageId);
        writer.writeObjectValue<EmailSender>("p1Sender", this.p1Sender);
        writer.writeObjectValue<EmailSender>("p2Sender", this.p2Sender);
        writer.writeDateValue("receivedDateTime", this.receivedDateTime);
        writer.writeStringValue("recipientEmailAddress", this.recipientEmailAddress);
        writer.writeStringValue("senderIp", this.senderIp);
        writer.writeStringValue("subject", this.subject);
        writer.writeCollectionOfPrimitiveValues<string>("threatDetectionMethods", this.threatDetectionMethods);
        writer.writeCollectionOfPrimitiveValues<string>("threats", this.threats);
        writer.writeNumberValue("urlCount", this.urlCount);
        writer.writeCollectionOfPrimitiveValues<string>("urls", this.urls);
        writer.writeStringValue("urn", this.urn);
    };
    /**
     * Gets the subject property value. The subject property
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject property
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Gets the threatDetectionMethods property value. The threatDetectionMethods property
     * @returns a string
     */
    public get threatDetectionMethods() {
        return this._threatDetectionMethods;
    };
    /**
     * Sets the threatDetectionMethods property value. The threatDetectionMethods property
     * @param value Value to set for the threatDetectionMethods property.
     */
    public set threatDetectionMethods(value: string[] | undefined) {
        this._threatDetectionMethods = value;
    };
    /**
     * Gets the threats property value. The threats property
     * @returns a string
     */
    public get threats() {
        return this._threats;
    };
    /**
     * Sets the threats property value. The threats property
     * @param value Value to set for the threats property.
     */
    public set threats(value: string[] | undefined) {
        this._threats = value;
    };
    /**
     * Gets the urlCount property value. The urlCount property
     * @returns a int64
     */
    public get urlCount() {
        return this._urlCount;
    };
    /**
     * Sets the urlCount property value. The urlCount property
     * @param value Value to set for the urlCount property.
     */
    public set urlCount(value: number | undefined) {
        this._urlCount = value;
    };
    /**
     * Gets the urls property value. The urls property
     * @returns a string
     */
    public get urls() {
        return this._urls;
    };
    /**
     * Sets the urls property value. The urls property
     * @param value Value to set for the urls property.
     */
    public set urls(value: string[] | undefined) {
        this._urls = value;
    };
    /**
     * Gets the urn property value. The urn property
     * @returns a string
     */
    public get urn() {
        return this._urn;
    };
    /**
     * Sets the urn property value. The urn property
     * @param value Value to set for the urn property.
     */
    public set urn(value: string | undefined) {
        this._urn = value;
    };
}
