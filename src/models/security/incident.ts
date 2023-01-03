import {Entity} from '../';
import {AlertClassification} from './alertClassification';
import {AlertDetermination} from './alertDetermination';
import {AlertSeverity} from './alertSeverity';
import {createAlertCommentFromDiscriminatorValue} from './createAlertCommentFromDiscriminatorValue';
import {createAlertFromDiscriminatorValue} from './createAlertFromDiscriminatorValue';
import {IncidentStatus} from './incidentStatus';
import {Alert, AlertComment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of agreementAcceptance entities.
 */
export class Incident extends Entity implements Parsable {
    /** The list of related alerts. Supports $expand. */
    private _alerts?: Alert[] | undefined;
    /** Owner of the incident, or null if no owner is assigned. Free editable text. */
    private _assignedTo?: string | undefined;
    /** The specification for the incident. Possible values are: unknown, falsePositive, truePositive, informationalExpectedActivity, unknownFutureValue. */
    private _classification?: AlertClassification | undefined;
    /** Array of comments created by the Security Operations (SecOps) team when the incident is managed. */
    private _comments?: AlertComment[] | undefined;
    /** Time when the incident was first created. */
    private _createdDateTime?: Date | undefined;
    /** Array of custom tags associated with an incident. */
    private _customTags?: string[] | undefined;
    /** Specifies the determination of the incident. Possible values are: unknown, apt, malware, securityPersonnel, securityTesting, unwantedSoftware, other, multiStagedAttack, compromisedUser, phishing, maliciousUserActivity, clean, insufficientData, confirmedUserActivity, lineOfBusinessApplication, unknownFutureValue. */
    private _determination?: AlertDetermination | undefined;
    /** The incident name. */
    private _displayName?: string | undefined;
    /** The URL for the incident page in the Microsoft 365 Defender portal. */
    private _incidentWebUrl?: string | undefined;
    /** Time when the incident was last updated. */
    private _lastUpdateDateTime?: Date | undefined;
    /** Only populated in case an incident is grouped together with another incident, as part of the logic that processes incidents. In such a case, the status property is redirected. */
    private _redirectIncidentId?: string | undefined;
    /** The severity property */
    private _severity?: AlertSeverity | undefined;
    /** The status property */
    private _status?: IncidentStatus | undefined;
    /** The Azure Active Directory tenant in which the alert was created. */
    private _tenantId?: string | undefined;
    /**
     * Gets the alerts property value. The list of related alerts. Supports $expand.
     * @returns a alert
     */
    public get alerts() {
        return this._alerts;
    };
    /**
     * Sets the alerts property value. The list of related alerts. Supports $expand.
     * @param value Value to set for the alerts property.
     */
    public set alerts(value: Alert[] | undefined) {
        this._alerts = value;
    };
    /**
     * Gets the assignedTo property value. Owner of the incident, or null if no owner is assigned. Free editable text.
     * @returns a string
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Sets the assignedTo property value. Owner of the incident, or null if no owner is assigned. Free editable text.
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: string | undefined) {
        this._assignedTo = value;
    };
    /**
     * Gets the classification property value. The specification for the incident. Possible values are: unknown, falsePositive, truePositive, informationalExpectedActivity, unknownFutureValue.
     * @returns a alertClassification
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. The specification for the incident. Possible values are: unknown, falsePositive, truePositive, informationalExpectedActivity, unknownFutureValue.
     * @param value Value to set for the classification property.
     */
    public set classification(value: AlertClassification | undefined) {
        this._classification = value;
    };
    /**
     * Gets the comments property value. Array of comments created by the Security Operations (SecOps) team when the incident is managed.
     * @returns a alertComment
     */
    public get comments() {
        return this._comments;
    };
    /**
     * Sets the comments property value. Array of comments created by the Security Operations (SecOps) team when the incident is managed.
     * @param value Value to set for the comments property.
     */
    public set comments(value: AlertComment[] | undefined) {
        this._comments = value;
    };
    /**
     * Instantiates a new incident and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Time when the incident was first created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Time when the incident was first created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the customTags property value. Array of custom tags associated with an incident.
     * @returns a string
     */
    public get customTags() {
        return this._customTags;
    };
    /**
     * Sets the customTags property value. Array of custom tags associated with an incident.
     * @param value Value to set for the customTags property.
     */
    public set customTags(value: string[] | undefined) {
        this._customTags = value;
    };
    /**
     * Gets the determination property value. Specifies the determination of the incident. Possible values are: unknown, apt, malware, securityPersonnel, securityTesting, unwantedSoftware, other, multiStagedAttack, compromisedUser, phishing, maliciousUserActivity, clean, insufficientData, confirmedUserActivity, lineOfBusinessApplication, unknownFutureValue.
     * @returns a alertDetermination
     */
    public get determination() {
        return this._determination;
    };
    /**
     * Sets the determination property value. Specifies the determination of the incident. Possible values are: unknown, apt, malware, securityPersonnel, securityTesting, unwantedSoftware, other, multiStagedAttack, compromisedUser, phishing, maliciousUserActivity, clean, insufficientData, confirmedUserActivity, lineOfBusinessApplication, unknownFutureValue.
     * @param value Value to set for the determination property.
     */
    public set determination(value: AlertDetermination | undefined) {
        this._determination = value;
    };
    /**
     * Gets the displayName property value. The incident name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The incident name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "alerts": n => { this.alerts = n.getCollectionOfObjectValues<Alert>(createAlertFromDiscriminatorValue); },
            "assignedTo": n => { this.assignedTo = n.getStringValue(); },
            "classification": n => { this.classification = n.getEnumValue<AlertClassification>(AlertClassification); },
            "comments": n => { this.comments = n.getCollectionOfObjectValues<AlertComment>(createAlertCommentFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "customTags": n => { this.customTags = n.getCollectionOfPrimitiveValues<string>(); },
            "determination": n => { this.determination = n.getEnumValue<AlertDetermination>(AlertDetermination); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "incidentWebUrl": n => { this.incidentWebUrl = n.getStringValue(); },
            "lastUpdateDateTime": n => { this.lastUpdateDateTime = n.getDateValue(); },
            "redirectIncidentId": n => { this.redirectIncidentId = n.getStringValue(); },
            "severity": n => { this.severity = n.getEnumValue<AlertSeverity>(AlertSeverity); },
            "status": n => { this.status = n.getEnumValue<IncidentStatus>(IncidentStatus); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
        };
    };
    /**
     * Gets the incidentWebUrl property value. The URL for the incident page in the Microsoft 365 Defender portal.
     * @returns a string
     */
    public get incidentWebUrl() {
        return this._incidentWebUrl;
    };
    /**
     * Sets the incidentWebUrl property value. The URL for the incident page in the Microsoft 365 Defender portal.
     * @param value Value to set for the incidentWebUrl property.
     */
    public set incidentWebUrl(value: string | undefined) {
        this._incidentWebUrl = value;
    };
    /**
     * Gets the lastUpdateDateTime property value. Time when the incident was last updated.
     * @returns a Date
     */
    public get lastUpdateDateTime() {
        return this._lastUpdateDateTime;
    };
    /**
     * Sets the lastUpdateDateTime property value. Time when the incident was last updated.
     * @param value Value to set for the lastUpdateDateTime property.
     */
    public set lastUpdateDateTime(value: Date | undefined) {
        this._lastUpdateDateTime = value;
    };
    /**
     * Gets the redirectIncidentId property value. Only populated in case an incident is grouped together with another incident, as part of the logic that processes incidents. In such a case, the status property is redirected.
     * @returns a string
     */
    public get redirectIncidentId() {
        return this._redirectIncidentId;
    };
    /**
     * Sets the redirectIncidentId property value. Only populated in case an incident is grouped together with another incident, as part of the logic that processes incidents. In such a case, the status property is redirected.
     * @param value Value to set for the redirectIncidentId property.
     */
    public set redirectIncidentId(value: string | undefined) {
        this._redirectIncidentId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Alert>("alerts", this.alerts);
        writer.writeStringValue("assignedTo", this.assignedTo);
        writer.writeEnumValue<AlertClassification>("classification", this.classification);
        writer.writeCollectionOfObjectValues<AlertComment>("comments", this.comments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("customTags", this.customTags);
        writer.writeEnumValue<AlertDetermination>("determination", this.determination);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("incidentWebUrl", this.incidentWebUrl);
        writer.writeDateValue("lastUpdateDateTime", this.lastUpdateDateTime);
        writer.writeStringValue("redirectIncidentId", this.redirectIncidentId);
        writer.writeEnumValue<AlertSeverity>("severity", this.severity);
        writer.writeEnumValue<IncidentStatus>("status", this.status);
        writer.writeStringValue("tenantId", this.tenantId);
    };
    /**
     * Gets the severity property value. The severity property
     * @returns a alertSeverity
     */
    public get severity() {
        return this._severity;
    };
    /**
     * Sets the severity property value. The severity property
     * @param value Value to set for the severity property.
     */
    public set severity(value: AlertSeverity | undefined) {
        this._severity = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a incidentStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: IncidentStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the tenantId property value. The Azure Active Directory tenant in which the alert was created.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The Azure Active Directory tenant in which the alert was created.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
}
