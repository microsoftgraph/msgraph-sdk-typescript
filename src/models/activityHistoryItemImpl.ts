import {ActivityHistoryItem} from './activityHistoryItem';
import {createUserActivityFromDiscriminatorValue} from './createUserActivityFromDiscriminatorValue';
import {EntityImpl, UserActivityImpl} from './index';
import {Status} from './status';
import {UserActivity} from './userActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ActivityHistoryItemImpl extends EntityImpl implements ActivityHistoryItem, Parsable {
    /** Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime. */
    public activeDurationSeconds?: number | undefined;
    /** The activity property */
    public activity?: UserActivity | undefined;
    /** Set by the server. DateTime in UTC when the object was created on the server. */
    public createdDateTime?: Date | undefined;
    /** Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client. */
    public expirationDateTime?: Date | undefined;
    /** Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing. */
    public lastActiveDateTime?: Date | undefined;
    /** Set by the server. DateTime in UTC when the object was modified on the server. */
    public lastModifiedDateTime?: Date | undefined;
    /** Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history. */
    public startedDateTime?: Date | undefined;
    /** Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored. */
    public status?: Status | undefined;
    /** Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation. */
    public userTimezone?: string | undefined;
    /**
     * Instantiates a new activityHistoryItem and sets the default values.
     * @param activityHistoryItemParameterValue 
     */
    public constructor(activityHistoryItemParameterValue?: ActivityHistoryItem | undefined) {
        super();
        this.activeDurationSeconds = activityHistoryItemParameterValue?.activeDurationSeconds ;
        this.activity = activityHistoryItemParameterValue?.activity ;
        this.createdDateTime = activityHistoryItemParameterValue?.createdDateTime ;
        this.expirationDateTime = activityHistoryItemParameterValue?.expirationDateTime ;
        this.lastActiveDateTime = activityHistoryItemParameterValue?.lastActiveDateTime ;
        this.lastModifiedDateTime = activityHistoryItemParameterValue?.lastModifiedDateTime ;
        this.startedDateTime = activityHistoryItemParameterValue?.startedDateTime ;
        this.status = activityHistoryItemParameterValue?.status ;
        this.userTimezone = activityHistoryItemParameterValue?.userTimezone ;
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
        writer.writeObjectValue<UserActivityImpl>("activity", new UserActivityImpl(this.activity));
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
}
