import {AlertFeedback} from './alertFeedback';
import {AlertStatus} from './alertStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertHistoryState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The Application ID of the calling application that submitted an update (PATCH) to the alert. The appId should be extracted from the auth token and not entered manually by the calling application. */
    private _appId?: string | undefined;
    /** UPN of user the alert was assigned to (note: alert.assignedTo only stores the last value/UPN). */
    private _assignedTo?: string | undefined;
    /** Comment entered by signed-in user. */
    private _comments?: string[] | undefined;
    /** Analyst feedback on the alert in this update. Possible values are: unknown, truePositive, falsePositive, benignPositive. */
    private _feedback?: AlertFeedback | undefined;
    /** Alert status value (if updated). Possible values are: unknown, newAlert, inProgress, resolved, dismissed. */
    private _status?: AlertStatus | undefined;
    /** Date and time of the alert update. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _updatedDateTime?: Date | undefined;
    /** UPN of the signed-in user that updated the alert (taken from the bearer token - if in user/delegated auth mode). */
    private _user?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the appId property value. The Application ID of the calling application that submitted an update (PATCH) to the alert. The appId should be extracted from the auth token and not entered manually by the calling application.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The Application ID of the calling application that submitted an update (PATCH) to the alert. The appId should be extracted from the auth token and not entered manually by the calling application.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Gets the assignedTo property value. UPN of user the alert was assigned to (note: alert.assignedTo only stores the last value/UPN).
     * @returns a string
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Sets the assignedTo property value. UPN of user the alert was assigned to (note: alert.assignedTo only stores the last value/UPN).
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: string | undefined) {
        this._assignedTo = value;
    };
    /**
     * Gets the comments property value. Comment entered by signed-in user.
     * @returns a string
     */
    public get comments() {
        return this._comments;
    };
    /**
     * Sets the comments property value. Comment entered by signed-in user.
     * @param value Value to set for the comments property.
     */
    public set comments(value: string[] | undefined) {
        this._comments = value;
    };
    /**
     * Instantiates a new alertHistoryState and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the feedback property value. Analyst feedback on the alert in this update. Possible values are: unknown, truePositive, falsePositive, benignPositive.
     * @returns a alertFeedback
     */
    public get feedback() {
        return this._feedback;
    };
    /**
     * Sets the feedback property value. Analyst feedback on the alert in this update. Possible values are: unknown, truePositive, falsePositive, benignPositive.
     * @param value Value to set for the feedback property.
     */
    public set feedback(value: AlertFeedback | undefined) {
        this._feedback = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appId": n => { this.appId = n.getStringValue(); },
            "assignedTo": n => { this.assignedTo = n.getStringValue(); },
            "comments": n => { this.comments = n.getCollectionOfPrimitiveValues<string>(); },
            "feedback": n => { this.feedback = n.getEnumValue<AlertFeedback>(AlertFeedback); },
            "status": n => { this.status = n.getEnumValue<AlertStatus>(AlertStatus); },
            "updatedDateTime": n => { this.updatedDateTime = n.getDateValue(); },
            "user": n => { this.user = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("assignedTo", this.assignedTo);
        writer.writeCollectionOfPrimitiveValues<string>("comments", this.comments);
        writer.writeEnumValue<AlertFeedback>("feedback", this.feedback);
        writer.writeEnumValue<AlertStatus>("status", this.status);
        writer.writeDateValue("updatedDateTime", this.updatedDateTime);
        writer.writeStringValue("user", this.user);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Alert status value (if updated). Possible values are: unknown, newAlert, inProgress, resolved, dismissed.
     * @returns a alertStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Alert status value (if updated). Possible values are: unknown, newAlert, inProgress, resolved, dismissed.
     * @param value Value to set for the status property.
     */
    public set status(value: AlertStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the updatedDateTime property value. Date and time of the alert update. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get updatedDateTime() {
        return this._updatedDateTime;
    };
    /**
     * Sets the updatedDateTime property value. Date and time of the alert update. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the updatedDateTime property.
     */
    public set updatedDateTime(value: Date | undefined) {
        this._updatedDateTime = value;
    };
    /**
     * Gets the user property value. UPN of the signed-in user that updated the alert (taken from the bearer token - if in user/delegated auth mode).
     * @returns a string
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. UPN of the signed-in user that updated the alert (taken from the bearer token - if in user/delegated auth mode).
     * @param value Value to set for the user property.
     */
    public set user(value: string | undefined) {
        this._user = value;
    };
}
