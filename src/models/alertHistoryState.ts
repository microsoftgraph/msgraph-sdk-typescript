import {AlertFeedback} from './alertFeedback';
import {AlertStatus} from './alertStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertHistoryState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The appId property */
    private _appId?: string | undefined;
    /** The assignedTo property */
    private _assignedTo?: string | undefined;
    /** The comments property */
    private _comments?: string[] | undefined;
    /** The feedback property */
    private _feedback?: AlertFeedback | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The status property */
    private _status?: AlertStatus | undefined;
    /** The updatedDateTime property */
    private _updatedDateTime?: Date | undefined;
    /** The user property */
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
     * Gets the appId property value. The appId property
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The appId property
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
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
     * Gets the comments property value. The comments property
     * @returns a string
     */
    public get comments() {
        return this._comments;
    };
    /**
     * Sets the comments property value. The comments property
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
     * Gets the feedback property value. The feedback property
     * @returns a alertFeedback
     */
    public get feedback() {
        return this._feedback;
    };
    /**
     * Sets the feedback property value. The feedback property
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<AlertStatus>(AlertStatus); },
            "updatedDateTime": n => { this.updatedDateTime = n.getDateValue(); },
            "user": n => { this.user = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<AlertStatus>("status", this.status);
        writer.writeDateValue("updatedDateTime", this.updatedDateTime);
        writer.writeStringValue("user", this.user);
        writer.writeAdditionalData(this.additionalData);
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
     * Gets the updatedDateTime property value. The updatedDateTime property
     * @returns a Date
     */
    public get updatedDateTime() {
        return this._updatedDateTime;
    };
    /**
     * Sets the updatedDateTime property value. The updatedDateTime property
     * @param value Value to set for the updatedDateTime property.
     */
    public set updatedDateTime(value: Date | undefined) {
        this._updatedDateTime = value;
    };
    /**
     * Gets the user property value. The user property
     * @returns a string
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. The user property
     * @param value Value to set for the user property.
     */
    public set user(value: string | undefined) {
        this._user = value;
    };
}
