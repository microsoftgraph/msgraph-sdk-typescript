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
 * Provides operations to manage the collection of agreement entities.
 */
export class Incident extends Entity implements Parsable {
    /** The alerts property */
    private _alerts?: Alert[] | undefined;
    /** The assignedTo property */
    private _assignedTo?: string | undefined;
    /** The classification property */
    private _classification?: AlertClassification | undefined;
    /** The comments property */
    private _comments?: AlertComment[] | undefined;
    /** The createdDateTime property */
    private _createdDateTime?: Date | undefined;
    /** The customTags property */
    private _customTags?: string[] | undefined;
    /** The determination property */
    private _determination?: AlertDetermination | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The incidentWebUrl property */
    private _incidentWebUrl?: string | undefined;
    /** The lastUpdateDateTime property */
    private _lastUpdateDateTime?: Date | undefined;
    /** The redirectIncidentId property */
    private _redirectIncidentId?: string | undefined;
    /** The severity property */
    private _severity?: AlertSeverity | undefined;
    /** The status property */
    private _status?: IncidentStatus | undefined;
    /** The tenantId property */
    private _tenantId?: string | undefined;
    /**
     * Gets the alerts property value. The alerts property
     * @returns a alert
     */
    public get alerts() {
        return this._alerts;
    };
    /**
     * Sets the alerts property value. The alerts property
     * @param value Value to set for the alerts property.
     */
    public set alerts(value: Alert[] | undefined) {
        this._alerts = value;
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
     * Instantiates a new incident and sets the default values.
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
     * Gets the customTags property value. The customTags property
     * @returns a string
     */
    public get customTags() {
        return this._customTags;
    };
    /**
     * Sets the customTags property value. The customTags property
     * @param value Value to set for the customTags property.
     */
    public set customTags(value: string[] | undefined) {
        this._customTags = value;
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
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
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
     * Gets the redirectIncidentId property value. The redirectIncidentId property
     * @returns a string
     */
    public get redirectIncidentId() {
        return this._redirectIncidentId;
    };
    /**
     * Sets the redirectIncidentId property value. The redirectIncidentId property
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
}
