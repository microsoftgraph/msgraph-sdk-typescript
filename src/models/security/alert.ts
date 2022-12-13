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

/**
 * Provides operations to manage the collection of agreement entities.
 */
export class Alert extends Entity implements Parsable {
    /** The actorDisplayName property */
    private _actorDisplayName?: string | undefined;
    /** The alertWebUrl property */
    private _alertWebUrl?: string | undefined;
    /** The assignedTo property */
    private _assignedTo?: string | undefined;
    /** The category property */
    private _category?: string | undefined;
    /** The classification property */
    private _classification?: AlertClassification | undefined;
    /** The comments property */
    private _comments?: AlertComment[] | undefined;
    /** The createdDateTime property */
    private _createdDateTime?: Date | undefined;
    /** The description property */
    private _description?: string | undefined;
    /** The detectionSource property */
    private _detectionSource?: DetectionSource | undefined;
    /** The detectorId property */
    private _detectorId?: string | undefined;
    /** The determination property */
    private _determination?: AlertDetermination | undefined;
    /** The evidence property */
    private _evidence?: AlertEvidence[] | undefined;
    /** The firstActivityDateTime property */
    private _firstActivityDateTime?: Date | undefined;
    /** The incidentId property */
    private _incidentId?: string | undefined;
    /** The incidentWebUrl property */
    private _incidentWebUrl?: string | undefined;
    /** The lastActivityDateTime property */
    private _lastActivityDateTime?: Date | undefined;
    /** The lastUpdateDateTime property */
    private _lastUpdateDateTime?: Date | undefined;
    /** The mitreTechniques property */
    private _mitreTechniques?: string[] | undefined;
    /** The providerAlertId property */
    private _providerAlertId?: string | undefined;
    /** The recommendedActions property */
    private _recommendedActions?: string | undefined;
    /** The resolvedDateTime property */
    private _resolvedDateTime?: Date | undefined;
    /** The serviceSource property */
    private _serviceSource?: ServiceSource | undefined;
    /** The severity property */
    private _severity?: AlertSeverity | undefined;
    /** The status property */
    private _status?: AlertStatus | undefined;
    /** The tenantId property */
    private _tenantId?: string | undefined;
    /** The threatDisplayName property */
    private _threatDisplayName?: string | undefined;
    /** The threatFamilyName property */
    private _threatFamilyName?: string | undefined;
    /** The title property */
    private _title?: string | undefined;
    /**
     * Gets the actorDisplayName property value. The actorDisplayName property
     * @returns a string
     */
    public get actorDisplayName() {
        return this._actorDisplayName;
    };
    /**
     * Sets the actorDisplayName property value. The actorDisplayName property
     * @param value Value to set for the actorDisplayName property.
     */
    public set actorDisplayName(value: string | undefined) {
        this._actorDisplayName = value;
    };
    /**
     * Gets the alertWebUrl property value. The alertWebUrl property
     * @returns a string
     */
    public get alertWebUrl() {
        return this._alertWebUrl;
    };
    /**
     * Sets the alertWebUrl property value. The alertWebUrl property
     * @param value Value to set for the alertWebUrl property.
     */
    public set alertWebUrl(value: string | undefined) {
        this._alertWebUrl = value;
    };
    /**
     * Gets the assignedTo property value. The assignedTo property
     * @returns a string
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Sets the assignedTo property value. The assignedTo property
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: string | undefined) {
        this._assignedTo = value;
    };
    /**
     * Gets the category property value. The category property
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. The category property
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Gets the classification property value. The classification property
     * @returns a alertClassification
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. The classification property
     * @param value Value to set for the classification property.
     */
    public set classification(value: AlertClassification | undefined) {
        this._classification = value;
    };
    /**
     * Gets the comments property value. The comments property
     * @returns a alertComment
     */
    public get comments() {
        return this._comments;
    };
    /**
     * Sets the comments property value. The comments property
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
     * Gets the createdDateTime property value. The createdDateTime property
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The createdDateTime property
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the detectionSource property value. The detectionSource property
     * @returns a detectionSource
     */
    public get detectionSource() {
        return this._detectionSource;
    };
    /**
     * Sets the detectionSource property value. The detectionSource property
     * @param value Value to set for the detectionSource property.
     */
    public set detectionSource(value: DetectionSource | undefined) {
        this._detectionSource = value;
    };
    /**
     * Gets the detectorId property value. The detectorId property
     * @returns a string
     */
    public get detectorId() {
        return this._detectorId;
    };
    /**
     * Sets the detectorId property value. The detectorId property
     * @param value Value to set for the detectorId property.
     */
    public set detectorId(value: string | undefined) {
        this._detectorId = value;
    };
    /**
     * Gets the determination property value. The determination property
     * @returns a alertDetermination
     */
    public get determination() {
        return this._determination;
    };
    /**
     * Sets the determination property value. The determination property
     * @param value Value to set for the determination property.
     */
    public set determination(value: AlertDetermination | undefined) {
        this._determination = value;
    };
    /**
     * Gets the evidence property value. The evidence property
     * @returns a alertEvidence
     */
    public get evidence() {
        return this._evidence;
    };
    /**
     * Sets the evidence property value. The evidence property
     * @param value Value to set for the evidence property.
     */
    public set evidence(value: AlertEvidence[] | undefined) {
        this._evidence = value;
    };
    /**
     * Gets the firstActivityDateTime property value. The firstActivityDateTime property
     * @returns a Date
     */
    public get firstActivityDateTime() {
        return this._firstActivityDateTime;
    };
    /**
     * Sets the firstActivityDateTime property value. The firstActivityDateTime property
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
     * Gets the incidentId property value. The incidentId property
     * @returns a string
     */
    public get incidentId() {
        return this._incidentId;
    };
    /**
     * Sets the incidentId property value. The incidentId property
     * @param value Value to set for the incidentId property.
     */
    public set incidentId(value: string | undefined) {
        this._incidentId = value;
    };
    /**
     * Gets the incidentWebUrl property value. The incidentWebUrl property
     * @returns a string
     */
    public get incidentWebUrl() {
        return this._incidentWebUrl;
    };
    /**
     * Sets the incidentWebUrl property value. The incidentWebUrl property
     * @param value Value to set for the incidentWebUrl property.
     */
    public set incidentWebUrl(value: string | undefined) {
        this._incidentWebUrl = value;
    };
    /**
     * Gets the lastActivityDateTime property value. The lastActivityDateTime property
     * @returns a Date
     */
    public get lastActivityDateTime() {
        return this._lastActivityDateTime;
    };
    /**
     * Sets the lastActivityDateTime property value. The lastActivityDateTime property
     * @param value Value to set for the lastActivityDateTime property.
     */
    public set lastActivityDateTime(value: Date | undefined) {
        this._lastActivityDateTime = value;
    };
    /**
     * Gets the lastUpdateDateTime property value. The lastUpdateDateTime property
     * @returns a Date
     */
    public get lastUpdateDateTime() {
        return this._lastUpdateDateTime;
    };
    /**
     * Sets the lastUpdateDateTime property value. The lastUpdateDateTime property
     * @param value Value to set for the lastUpdateDateTime property.
     */
    public set lastUpdateDateTime(value: Date | undefined) {
        this._lastUpdateDateTime = value;
    };
    /**
     * Gets the mitreTechniques property value. The mitreTechniques property
     * @returns a string
     */
    public get mitreTechniques() {
        return this._mitreTechniques;
    };
    /**
     * Sets the mitreTechniques property value. The mitreTechniques property
     * @param value Value to set for the mitreTechniques property.
     */
    public set mitreTechniques(value: string[] | undefined) {
        this._mitreTechniques = value;
    };
    /**
     * Gets the providerAlertId property value. The providerAlertId property
     * @returns a string
     */
    public get providerAlertId() {
        return this._providerAlertId;
    };
    /**
     * Sets the providerAlertId property value. The providerAlertId property
     * @param value Value to set for the providerAlertId property.
     */
    public set providerAlertId(value: string | undefined) {
        this._providerAlertId = value;
    };
    /**
     * Gets the recommendedActions property value. The recommendedActions property
     * @returns a string
     */
    public get recommendedActions() {
        return this._recommendedActions;
    };
    /**
     * Sets the recommendedActions property value. The recommendedActions property
     * @param value Value to set for the recommendedActions property.
     */
    public set recommendedActions(value: string | undefined) {
        this._recommendedActions = value;
    };
    /**
     * Gets the resolvedDateTime property value. The resolvedDateTime property
     * @returns a Date
     */
    public get resolvedDateTime() {
        return this._resolvedDateTime;
    };
    /**
     * Sets the resolvedDateTime property value. The resolvedDateTime property
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
     * Gets the serviceSource property value. The serviceSource property
     * @returns a serviceSource
     */
    public get serviceSource() {
        return this._serviceSource;
    };
    /**
     * Sets the serviceSource property value. The serviceSource property
     * @param value Value to set for the serviceSource property.
     */
    public set serviceSource(value: ServiceSource | undefined) {
        this._serviceSource = value;
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
     * @returns a alertStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: AlertStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the tenantId property value. The tenantId property
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The tenantId property
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Gets the threatDisplayName property value. The threatDisplayName property
     * @returns a string
     */
    public get threatDisplayName() {
        return this._threatDisplayName;
    };
    /**
     * Sets the threatDisplayName property value. The threatDisplayName property
     * @param value Value to set for the threatDisplayName property.
     */
    public set threatDisplayName(value: string | undefined) {
        this._threatDisplayName = value;
    };
    /**
     * Gets the threatFamilyName property value. The threatFamilyName property
     * @returns a string
     */
    public get threatFamilyName() {
        return this._threatFamilyName;
    };
    /**
     * Sets the threatFamilyName property value. The threatFamilyName property
     * @param value Value to set for the threatFamilyName property.
     */
    public set threatFamilyName(value: string | undefined) {
        this._threatFamilyName = value;
    };
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
