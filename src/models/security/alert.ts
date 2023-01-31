import {Entity} from '../';
import {AlertClassification} from './alertClassification';
import {AlertDetermination} from './alertDetermination';
import {AlertSeverity} from './alertSeverity';
import {AlertStatus} from './alertStatus';
import {createAlertCommentFromDiscriminatorValue} from './createAlertCommentFromDiscriminatorValue';
import {createAlertEvidenceFromDiscriminatorValue} from './createAlertEvidenceFromDiscriminatorValue';
import {DetectionSource} from './detectionSource';
import {AlertComment, AlertEvidence} from './index';
import {ServiceSource} from './serviceSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Alert extends Entity implements Parsable {
    /** The adversary or activity group that is associated with this alert. */
    private _actorDisplayName?: string | undefined;
    /** URL for the alert page in the Microsoft 365 Defender portal. */
    private _alertWebUrl?: string | undefined;
    /** Owner of the alert, or null if no owner is assigned. */
    private _assignedTo?: string | undefined;
    /** The attack kill-chain category that the alert belongs to. Aligned with the MITRE ATT&CK framework. */
    private _category?: string | undefined;
    /** Specifies whether the alert represents a true threat. Possible values are: unknown, falsePositive, truePositive, benignPositive, unknownFutureValue. */
    private _classification?: AlertClassification | undefined;
    /** Array of comments created by the Security Operations (SecOps) team during the alert management process. */
    private _comments?: AlertComment[] | undefined;
    /** Time when Microsoft 365 Defender created the alert. */
    private _createdDateTime?: Date | undefined;
    /** String value describing each alert. */
    private _description?: string | undefined;
    /** Detection technology or sensor that identified the notable component or activity. */
    private _detectionSource?: DetectionSource | undefined;
    /** The ID of the detector that triggered the alert. */
    private _detectorId?: string | undefined;
    /** Specifies the result of the investigation, whether the alert represents a true attack and if so, the nature of the attack. Possible values are: unknown, apt, malware, securityPersonnel, securityTesting, unwantedSoftware, other, multiStagedAttack, compromisedUser, phishing, maliciousUserActivity, clean, insufficientData, confirmedUserActivity, lineOfBusinessApplication, unknownFutureValue. */
    private _determination?: AlertDetermination | undefined;
    /** Collection of evidence related to the alert. */
    private _evidence?: AlertEvidence[] | undefined;
    /** The earliest activity associated with the alert. */
    private _firstActivityDateTime?: Date | undefined;
    /** Unique identifier to represent the incident this alert resource is associated with. */
    private _incidentId?: string | undefined;
    /** URL for the incident page in the Microsoft 365 Defender portal. */
    private _incidentWebUrl?: string | undefined;
    /** The oldest activity associated with the alert. */
    private _lastActivityDateTime?: Date | undefined;
    /** Time when the alert was last updated at Microsoft 365 Defender. */
    private _lastUpdateDateTime?: Date | undefined;
    /** The attack techniques, as aligned with the MITRE ATT&CK framework. */
    private _mitreTechniques?: string[] | undefined;
    /** The ID of the alert as it appears in the security provider product that generated the alert. */
    private _providerAlertId?: string | undefined;
    /** Recommended response and remediation actions to take in the event this alert was generated. */
    private _recommendedActions?: string | undefined;
    /** Time when the alert was resolved. */
    private _resolvedDateTime?: Date | undefined;
    private _serviceSource?: ServiceSource | undefined;
    private _severity?: AlertSeverity | undefined;
    private _status?: AlertStatus | undefined;
    /** The Azure Active Directory tenant the alert was created in. */
    private _tenantId?: string | undefined;
    /** The threat associated with this alert. */
    private _threatDisplayName?: string | undefined;
    /** Threat family associated with this alert. */
    private _threatFamilyName?: string | undefined;
    /** Brief identifying string value describing the alert. */
    private _title?: string | undefined;
    /**
     * Gets the actorDisplayName property value. The adversary or activity group that is associated with this alert.
     * @returns a string
     */
    public get actorDisplayName() {
        return this._actorDisplayName;
    };
    /**
     * Sets the actorDisplayName property value. The adversary or activity group that is associated with this alert.
     * @param value Value to set for the actorDisplayName property.
     */
    public set actorDisplayName(value: string | undefined) {
        this._actorDisplayName = value;
    };
    /**
     * Gets the alertWebUrl property value. URL for the alert page in the Microsoft 365 Defender portal.
     * @returns a string
     */
    public get alertWebUrl() {
        return this._alertWebUrl;
    };
    /**
     * Sets the alertWebUrl property value. URL for the alert page in the Microsoft 365 Defender portal.
     * @param value Value to set for the alertWebUrl property.
     */
    public set alertWebUrl(value: string | undefined) {
        this._alertWebUrl = value;
    };
    /**
     * Gets the assignedTo property value. Owner of the alert, or null if no owner is assigned.
     * @returns a string
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Sets the assignedTo property value. Owner of the alert, or null if no owner is assigned.
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: string | undefined) {
        this._assignedTo = value;
    };
    /**
     * Gets the category property value. The attack kill-chain category that the alert belongs to. Aligned with the MITRE ATT&CK framework.
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. The attack kill-chain category that the alert belongs to. Aligned with the MITRE ATT&CK framework.
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Gets the classification property value. Specifies whether the alert represents a true threat. Possible values are: unknown, falsePositive, truePositive, benignPositive, unknownFutureValue.
     * @returns a alertClassification
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. Specifies whether the alert represents a true threat. Possible values are: unknown, falsePositive, truePositive, benignPositive, unknownFutureValue.
     * @param value Value to set for the classification property.
     */
    public set classification(value: AlertClassification | undefined) {
        this._classification = value;
    };
    /**
     * Gets the comments property value. Array of comments created by the Security Operations (SecOps) team during the alert management process.
     * @returns a alertComment
     */
    public get comments() {
        return this._comments;
    };
    /**
     * Sets the comments property value. Array of comments created by the Security Operations (SecOps) team during the alert management process.
     * @param value Value to set for the comments property.
     */
    public set comments(value: AlertComment[] | undefined) {
        this._comments = value;
    };
    /**
     * Instantiates a new alert and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Time when Microsoft 365 Defender created the alert.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Time when Microsoft 365 Defender created the alert.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. String value describing each alert.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. String value describing each alert.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the detectionSource property value. Detection technology or sensor that identified the notable component or activity.
     * @returns a detectionSource
     */
    public get detectionSource() {
        return this._detectionSource;
    };
    /**
     * Sets the detectionSource property value. Detection technology or sensor that identified the notable component or activity.
     * @param value Value to set for the detectionSource property.
     */
    public set detectionSource(value: DetectionSource | undefined) {
        this._detectionSource = value;
    };
    /**
     * Gets the detectorId property value. The ID of the detector that triggered the alert.
     * @returns a string
     */
    public get detectorId() {
        return this._detectorId;
    };
    /**
     * Sets the detectorId property value. The ID of the detector that triggered the alert.
     * @param value Value to set for the detectorId property.
     */
    public set detectorId(value: string | undefined) {
        this._detectorId = value;
    };
    /**
     * Gets the determination property value. Specifies the result of the investigation, whether the alert represents a true attack and if so, the nature of the attack. Possible values are: unknown, apt, malware, securityPersonnel, securityTesting, unwantedSoftware, other, multiStagedAttack, compromisedUser, phishing, maliciousUserActivity, clean, insufficientData, confirmedUserActivity, lineOfBusinessApplication, unknownFutureValue.
     * @returns a alertDetermination
     */
    public get determination() {
        return this._determination;
    };
    /**
     * Sets the determination property value. Specifies the result of the investigation, whether the alert represents a true attack and if so, the nature of the attack. Possible values are: unknown, apt, malware, securityPersonnel, securityTesting, unwantedSoftware, other, multiStagedAttack, compromisedUser, phishing, maliciousUserActivity, clean, insufficientData, confirmedUserActivity, lineOfBusinessApplication, unknownFutureValue.
     * @param value Value to set for the determination property.
     */
    public set determination(value: AlertDetermination | undefined) {
        this._determination = value;
    };
    /**
     * Gets the evidence property value. Collection of evidence related to the alert.
     * @returns a alertEvidence
     */
    public get evidence() {
        return this._evidence;
    };
    /**
     * Sets the evidence property value. Collection of evidence related to the alert.
     * @param value Value to set for the evidence property.
     */
    public set evidence(value: AlertEvidence[] | undefined) {
        this._evidence = value;
    };
    /**
     * Gets the firstActivityDateTime property value. The earliest activity associated with the alert.
     * @returns a Date
     */
    public get firstActivityDateTime() {
        return this._firstActivityDateTime;
    };
    /**
     * Sets the firstActivityDateTime property value. The earliest activity associated with the alert.
     * @param value Value to set for the firstActivityDateTime property.
     */
    public set firstActivityDateTime(value: Date | undefined) {
        this._firstActivityDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "actorDisplayName": n => { this.actorDisplayName = n.getStringValue(); },
            "alertWebUrl": n => { this.alertWebUrl = n.getStringValue(); },
            "assignedTo": n => { this.assignedTo = n.getStringValue(); },
            "category": n => { this.category = n.getStringValue(); },
            "classification": n => { this.classification = n.getEnumValue<AlertClassification>(AlertClassification); },
            "comments": n => { this.comments = n.getCollectionOfObjectValues<AlertComment>(createAlertCommentFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "detectionSource": n => { this.detectionSource = n.getEnumValue<DetectionSource>(DetectionSource); },
            "detectorId": n => { this.detectorId = n.getStringValue(); },
            "determination": n => { this.determination = n.getEnumValue<AlertDetermination>(AlertDetermination); },
            "evidence": n => { this.evidence = n.getCollectionOfObjectValues<AlertEvidence>(createAlertEvidenceFromDiscriminatorValue); },
            "firstActivityDateTime": n => { this.firstActivityDateTime = n.getDateValue(); },
            "incidentId": n => { this.incidentId = n.getStringValue(); },
            "incidentWebUrl": n => { this.incidentWebUrl = n.getStringValue(); },
            "lastActivityDateTime": n => { this.lastActivityDateTime = n.getDateValue(); },
            "lastUpdateDateTime": n => { this.lastUpdateDateTime = n.getDateValue(); },
            "mitreTechniques": n => { this.mitreTechniques = n.getCollectionOfPrimitiveValues<string>(); },
            "providerAlertId": n => { this.providerAlertId = n.getStringValue(); },
            "recommendedActions": n => { this.recommendedActions = n.getStringValue(); },
            "resolvedDateTime": n => { this.resolvedDateTime = n.getDateValue(); },
            "serviceSource": n => { this.serviceSource = n.getEnumValue<ServiceSource>(ServiceSource); },
            "severity": n => { this.severity = n.getEnumValue<AlertSeverity>(AlertSeverity); },
            "status": n => { this.status = n.getEnumValue<AlertStatus>(AlertStatus); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "threatDisplayName": n => { this.threatDisplayName = n.getStringValue(); },
            "threatFamilyName": n => { this.threatFamilyName = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Gets the incidentId property value. Unique identifier to represent the incident this alert resource is associated with.
     * @returns a string
     */
    public get incidentId() {
        return this._incidentId;
    };
    /**
     * Sets the incidentId property value. Unique identifier to represent the incident this alert resource is associated with.
     * @param value Value to set for the incidentId property.
     */
    public set incidentId(value: string | undefined) {
        this._incidentId = value;
    };
    /**
     * Gets the incidentWebUrl property value. URL for the incident page in the Microsoft 365 Defender portal.
     * @returns a string
     */
    public get incidentWebUrl() {
        return this._incidentWebUrl;
    };
    /**
     * Sets the incidentWebUrl property value. URL for the incident page in the Microsoft 365 Defender portal.
     * @param value Value to set for the incidentWebUrl property.
     */
    public set incidentWebUrl(value: string | undefined) {
        this._incidentWebUrl = value;
    };
    /**
     * Gets the lastActivityDateTime property value. The oldest activity associated with the alert.
     * @returns a Date
     */
    public get lastActivityDateTime() {
        return this._lastActivityDateTime;
    };
    /**
     * Sets the lastActivityDateTime property value. The oldest activity associated with the alert.
     * @param value Value to set for the lastActivityDateTime property.
     */
    public set lastActivityDateTime(value: Date | undefined) {
        this._lastActivityDateTime = value;
    };
    /**
     * Gets the lastUpdateDateTime property value. Time when the alert was last updated at Microsoft 365 Defender.
     * @returns a Date
     */
    public get lastUpdateDateTime() {
        return this._lastUpdateDateTime;
    };
    /**
     * Sets the lastUpdateDateTime property value. Time when the alert was last updated at Microsoft 365 Defender.
     * @param value Value to set for the lastUpdateDateTime property.
     */
    public set lastUpdateDateTime(value: Date | undefined) {
        this._lastUpdateDateTime = value;
    };
    /**
     * Gets the mitreTechniques property value. The attack techniques, as aligned with the MITRE ATT&CK framework.
     * @returns a string
     */
    public get mitreTechniques() {
        return this._mitreTechniques;
    };
    /**
     * Sets the mitreTechniques property value. The attack techniques, as aligned with the MITRE ATT&CK framework.
     * @param value Value to set for the mitreTechniques property.
     */
    public set mitreTechniques(value: string[] | undefined) {
        this._mitreTechniques = value;
    };
    /**
     * Gets the providerAlertId property value. The ID of the alert as it appears in the security provider product that generated the alert.
     * @returns a string
     */
    public get providerAlertId() {
        return this._providerAlertId;
    };
    /**
     * Sets the providerAlertId property value. The ID of the alert as it appears in the security provider product that generated the alert.
     * @param value Value to set for the providerAlertId property.
     */
    public set providerAlertId(value: string | undefined) {
        this._providerAlertId = value;
    };
    /**
     * Gets the recommendedActions property value. Recommended response and remediation actions to take in the event this alert was generated.
     * @returns a string
     */
    public get recommendedActions() {
        return this._recommendedActions;
    };
    /**
     * Sets the recommendedActions property value. Recommended response and remediation actions to take in the event this alert was generated.
     * @param value Value to set for the recommendedActions property.
     */
    public set recommendedActions(value: string | undefined) {
        this._recommendedActions = value;
    };
    /**
     * Gets the resolvedDateTime property value. Time when the alert was resolved.
     * @returns a Date
     */
    public get resolvedDateTime() {
        return this._resolvedDateTime;
    };
    /**
     * Sets the resolvedDateTime property value. Time when the alert was resolved.
     * @param value Value to set for the resolvedDateTime property.
     */
    public set resolvedDateTime(value: Date | undefined) {
        this._resolvedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("actorDisplayName", this.actorDisplayName);
        writer.writeStringValue("alertWebUrl", this.alertWebUrl);
        writer.writeStringValue("assignedTo", this.assignedTo);
        writer.writeStringValue("category", this.category);
        writer.writeEnumValue<AlertClassification>("classification", this.classification);
        writer.writeCollectionOfObjectValues<AlertComment>("comments", this.comments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeEnumValue<DetectionSource>("detectionSource", this.detectionSource);
        writer.writeStringValue("detectorId", this.detectorId);
        writer.writeEnumValue<AlertDetermination>("determination", this.determination);
        writer.writeCollectionOfObjectValues<AlertEvidence>("evidence", this.evidence);
        writer.writeDateValue("firstActivityDateTime", this.firstActivityDateTime);
        writer.writeStringValue("incidentId", this.incidentId);
        writer.writeStringValue("incidentWebUrl", this.incidentWebUrl);
        writer.writeDateValue("lastActivityDateTime", this.lastActivityDateTime);
        writer.writeDateValue("lastUpdateDateTime", this.lastUpdateDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("mitreTechniques", this.mitreTechniques);
        writer.writeStringValue("providerAlertId", this.providerAlertId);
        writer.writeStringValue("recommendedActions", this.recommendedActions);
        writer.writeDateValue("resolvedDateTime", this.resolvedDateTime);
        writer.writeEnumValue<ServiceSource>("serviceSource", this.serviceSource);
        writer.writeEnumValue<AlertSeverity>("severity", this.severity);
        writer.writeEnumValue<AlertStatus>("status", this.status);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeStringValue("threatDisplayName", this.threatDisplayName);
        writer.writeStringValue("threatFamilyName", this.threatFamilyName);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Gets the serviceSource property value. 
     * @returns a serviceSource
     */
    public get serviceSource() {
        return this._serviceSource;
    };
    /**
     * Sets the serviceSource property value. 
     * @param value Value to set for the serviceSource property.
     */
    public set serviceSource(value: ServiceSource | undefined) {
        this._serviceSource = value;
    };
    /**
     * Gets the severity property value. 
     * @returns a alertSeverity
     */
    public get severity() {
        return this._severity;
    };
    /**
     * Sets the severity property value. 
     * @param value Value to set for the severity property.
     */
    public set severity(value: AlertSeverity | undefined) {
        this._severity = value;
    };
    /**
     * Gets the status property value. 
     * @returns a alertStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: AlertStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the tenantId property value. The Azure Active Directory tenant the alert was created in.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The Azure Active Directory tenant the alert was created in.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Gets the threatDisplayName property value. The threat associated with this alert.
     * @returns a string
     */
    public get threatDisplayName() {
        return this._threatDisplayName;
    };
    /**
     * Sets the threatDisplayName property value. The threat associated with this alert.
     * @param value Value to set for the threatDisplayName property.
     */
    public set threatDisplayName(value: string | undefined) {
        this._threatDisplayName = value;
    };
    /**
     * Gets the threatFamilyName property value. Threat family associated with this alert.
     * @returns a string
     */
    public get threatFamilyName() {
        return this._threatFamilyName;
    };
    /**
     * Sets the threatFamilyName property value. Threat family associated with this alert.
     * @param value Value to set for the threatFamilyName property.
     */
    public set threatFamilyName(value: string | undefined) {
        this._threatFamilyName = value;
    };
    /**
     * Gets the title property value. Brief identifying string value describing the alert.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Brief identifying string value describing the alert.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
