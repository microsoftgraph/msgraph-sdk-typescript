import {ActivityHistoryItem} from './activityHistoryItem';
import {createUserActivityFromDiscriminatorValue} from './createUserActivityFromDiscriminatorValue';
import {EntityImpl, UserActivityImpl} from './index';
import {Status} from './status';
import {UserActivity} from './userActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ActivityHistoryItemImpl extends EntityImpl implements ActivityHistoryItem {
    /** Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime. */
    private _activeDurationSeconds?: number | undefined;
    /** The activity property */
    private _activity?: UserActivity | undefined;
    /** Set by the server. DateTime in UTC when the object was created on the server. */
    private _createdDateTime?: Date | undefined;
    /** Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client. */
    private _expirationDateTime?: Date | undefined;
    /** Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing. */
    private _lastActiveDateTime?: Date | undefined;
    /** Set by the server. DateTime in UTC when the object was modified on the server. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history. */
    private _startedDateTime?: Date | undefined;
    /** Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored. */
    private _status?: Status | undefined;
    /** Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation. */
    private _userTimezone?: string | undefined;
    /**
     * Gets the activeDurationSeconds property value. Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime.
     * @returns a integer
     */
    public get activeDurationSeconds() {
        return this._activeDurationSeconds;
    };
    /**
     * Sets the activeDurationSeconds property value. Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime.
     * @param value Value to set for the activeDurationSeconds property.
     */
    public set activeDurationSeconds(value: number | undefined) {
        if(value) {
            this._activeDurationSeconds = value;
        }
    };
    /**
     * Gets the activity property value. The activity property
     * @returns a UserActivityInterface
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. The activity property
     * @param value Value to set for the activity property.
     */
    public set activity(value: UserActivity | undefined) {
        if(value) {
            this._activity = value instanceof UserActivityImpl? value : new UserActivityImpl(value);
        }
    };
    /**
     * Instantiates a new activityHistoryItem and sets the default values.
     * @param activityHistoryItemParameterValue 
     */
    public constructor(activityHistoryItemParameterValue?: ActivityHistoryItem | undefined) {
        super(activityHistoryItemParameterValue);
        this._activeDurationSeconds = activityHistoryItemParameterValue?.activeDurationSeconds;
        this._activity = activityHistoryItemParameterValue?.activity;
        this._createdDateTime = activityHistoryItemParameterValue?.createdDateTime;
        this._expirationDateTime = activityHistoryItemParameterValue?.expirationDateTime;
        this._lastActiveDateTime = activityHistoryItemParameterValue?.lastActiveDateTime;
        this._lastModifiedDateTime = activityHistoryItemParameterValue?.lastModifiedDateTime;
        this._startedDateTime = activityHistoryItemParameterValue?.startedDateTime;
        this._status = activityHistoryItemParameterValue?.status;
        this._userTimezone = activityHistoryItemParameterValue?.userTimezone;
    };
    /**
     * Gets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the expirationDateTime property value. Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        if(value) {
            this._expirationDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activeDurationSeconds": n => { this.activeDurationSeconds = n.getNumberValue(); },
            "activity": n => { this.activity = n.getObjectValue<UserActivityImpl>(createUserActivityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "lastActiveDateTime": n => { this.lastActiveDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "startedDateTime": n => { this.startedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<Status>(Status); },
            "userTimezone": n => { this.userTimezone = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastActiveDateTime property value. Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing.
     * @returns a Date
     */
    public get lastActiveDateTime() {
        return this._lastActiveDateTime;
    };
    /**
     * Sets the lastActiveDateTime property value. Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing.
     * @param value Value to set for the lastActiveDateTime property.
     */
    public set lastActiveDateTime(value: Date | undefined) {
        if(value) {
            this._lastActiveDateTime = value;
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activeDurationSeconds){
            writer.writeNumberValue("activeDurationSeconds", this.activeDurationSeconds);
        }
        if(this.activity){
            writer.writeObjectValue<UserActivityImpl>("activity", (!this.activity || this.activity instanceof UserActivityImpl? this.activity : new UserActivityImpl(this.activity)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.lastActiveDateTime){
            writer.writeDateValue("lastActiveDateTime", this.lastActiveDateTime);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.startedDateTime){
            writer.writeDateValue("startedDateTime", this.startedDateTime);
        }
        if(this.status){
            writer.writeEnumValue<Status>("status", this.status);
        }
        if(this.userTimezone){
            writer.writeStringValue("userTimezone", this.userTimezone);
        }
    };
    /**
     * Gets the startedDateTime property value. Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.
     * @returns a Date
     */
    public get startedDateTime() {
        return this._startedDateTime;
    };
    /**
     * Sets the startedDateTime property value. Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.
     * @param value Value to set for the startedDateTime property.
     */
    public set startedDateTime(value: Date | undefined) {
        if(value) {
            this._startedDateTime = value;
        }
    };
    /**
     * Gets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
     * @returns a status
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
     * @param value Value to set for the status property.
     */
    public set status(value: Status | undefined) {
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation.
     * @returns a string
     */
    public get userTimezone() {
        return this._userTimezone;
    };
    /**
     * Sets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation.
     * @param value Value to set for the userTimezone property.
     */
    public set userTimezone(value: string | undefined) {
        if(value) {
            this._userTimezone = value;
        }
    };
}
