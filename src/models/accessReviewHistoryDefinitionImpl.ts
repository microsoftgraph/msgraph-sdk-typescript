import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryScheduleSettings} from './accessReviewHistoryScheduleSettings';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {AccessReviewScope} from './accessReviewScope';
import {createAccessReviewHistoryInstanceFromDiscriminatorValue} from './createAccessReviewHistoryInstanceFromDiscriminatorValue';
import {createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue} from './createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {AccessReviewHistoryInstanceImpl, AccessReviewHistoryScheduleSettingsImpl, AccessReviewScopeImpl, EntityImpl, UserIdentityImpl} from './index';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewHistoryDefinitionImpl extends EntityImpl implements AccessReviewHistoryDefinition {
    /** The createdBy property */
    private _createdBy?: UserIdentity | undefined;
    /** Timestamp when the access review definition was created. */
    private _createdDateTime?: Date | undefined;
    /** Determines which review decisions will be included in the fetched review history data if specified. Optional on create. All decisions will be included by default if no decisions are provided on create. Possible values are: approve, deny, dontKnow, notReviewed, and notNotified. */
    private _decisions?: string[] | undefined;
    /** Name for the access review history data collection. Required. */
    private _displayName?: string | undefined;
    /** If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that does not recur will have exactly one instance. */
    private _instances?: AccessReviewHistoryInstance[] | undefined;
    /** A timestamp. Reviews ending on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined. */
    private _reviewHistoryPeriodEndDateTime?: Date | undefined;
    /** A timestamp. Reviews starting on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined. */
    private _reviewHistoryPeriodStartDateTime?: Date | undefined;
    /** The settings for a recurring access review history definition series. Only required if reviewHistoryPeriodStartDateTime or reviewHistoryPeriodEndDateTime are not defined. Not supported yet. */
    private _scheduleSettings?: AccessReviewHistoryScheduleSettings | undefined;
    /** Used to scope what reviews are included in the fetched history data. Fetches reviews whose scope matches with this provided scope. Required. */
    private _scopes?: AccessReviewScope[] | undefined;
    /** Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. */
    private _status?: AccessReviewHistoryStatus | undefined;
    /**
     * Instantiates a new accessReviewHistoryDefinition and sets the default values.
     * @param accessReviewHistoryDefinitionParameterValue 
     */
    public constructor(accessReviewHistoryDefinitionParameterValue?: AccessReviewHistoryDefinition | undefined) {
        super(accessReviewHistoryDefinitionParameterValue);
        this._createdBy = accessReviewHistoryDefinitionParameterValue?.createdBy;
        this._createdDateTime = accessReviewHistoryDefinitionParameterValue?.createdDateTime;
        this._decisions = accessReviewHistoryDefinitionParameterValue?.decisions;
        this._displayName = accessReviewHistoryDefinitionParameterValue?.displayName;
        this._instances = accessReviewHistoryDefinitionParameterValue?.instances;
        this._reviewHistoryPeriodEndDateTime = accessReviewHistoryDefinitionParameterValue?.reviewHistoryPeriodEndDateTime;
        this._reviewHistoryPeriodStartDateTime = accessReviewHistoryDefinitionParameterValue?.reviewHistoryPeriodStartDateTime;
        this._scheduleSettings = accessReviewHistoryDefinitionParameterValue?.scheduleSettings;
        this._scopes = accessReviewHistoryDefinitionParameterValue?.scopes;
        this._status = accessReviewHistoryDefinitionParameterValue?.status;
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a UserIdentityInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: UserIdentity | undefined) {
        if(value) {
            this._createdBy = value instanceof UserIdentityImpl? value : new UserIdentityImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. Timestamp when the access review definition was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp when the access review definition was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the decisions property value. Determines which review decisions will be included in the fetched review history data if specified. Optional on create. All decisions will be included by default if no decisions are provided on create. Possible values are: approve, deny, dontKnow, notReviewed, and notNotified.
     * @returns a string
     */
    public get decisions() {
        return this._decisions;
    };
    /**
     * Sets the decisions property value. Determines which review decisions will be included in the fetched review history data if specified. Optional on create. All decisions will be included by default if no decisions are provided on create. Possible values are: approve, deny, dontKnow, notReviewed, and notNotified.
     * @param value Value to set for the decisions property.
     */
    public set decisions(value: string[] | undefined) {
        if(value) {
            this._decisions = value;
        }
    };
    /**
     * Gets the displayName property value. Name for the access review history data collection. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name for the access review history data collection. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<UserIdentityImpl>(createUserIdentityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "decisions": n => { this.decisions = n.getCollectionOfPrimitiveValues<string>(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "instances": n => { this.instances = n.getCollectionOfObjectValues<AccessReviewHistoryInstanceImpl>(createAccessReviewHistoryInstanceFromDiscriminatorValue); },
            "reviewHistoryPeriodEndDateTime": n => { this.reviewHistoryPeriodEndDateTime = n.getDateValue(); },
            "reviewHistoryPeriodStartDateTime": n => { this.reviewHistoryPeriodStartDateTime = n.getDateValue(); },
            "scheduleSettings": n => { this.scheduleSettings = n.getObjectValue<AccessReviewHistoryScheduleSettingsImpl>(createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue); },
            "scopes": n => { this.scopes = n.getCollectionOfObjectValues<AccessReviewScopeImpl>(createAccessReviewScopeFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<AccessReviewHistoryStatus>(AccessReviewHistoryStatus); },
        };
    };
    /**
     * Gets the instances property value. If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that does not recur will have exactly one instance.
     * @returns a AccessReviewHistoryInstanceInterface
     */
    public get instances() {
        return this._instances;
    };
    /**
     * Sets the instances property value. If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that does not recur will have exactly one instance.
     * @param value Value to set for the instances property.
     */
    public set instances(value: AccessReviewHistoryInstance[] | undefined) {
        if(value) {
            const instancesArrValue: AccessReviewHistoryInstanceImpl[] = [];
            this.instances?.forEach(element => {
                instancesArrValue.push((element instanceof AccessReviewHistoryInstanceImpl? element:new AccessReviewHistoryInstanceImpl(element)));
            });
            this._instances = instancesArrValue;
        }
    };
    /**
     * Gets the reviewHistoryPeriodEndDateTime property value. A timestamp. Reviews ending on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.
     * @returns a Date
     */
    public get reviewHistoryPeriodEndDateTime() {
        return this._reviewHistoryPeriodEndDateTime;
    };
    /**
     * Sets the reviewHistoryPeriodEndDateTime property value. A timestamp. Reviews ending on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.
     * @param value Value to set for the reviewHistoryPeriodEndDateTime property.
     */
    public set reviewHistoryPeriodEndDateTime(value: Date | undefined) {
        if(value) {
            this._reviewHistoryPeriodEndDateTime = value;
        }
    };
    /**
     * Gets the reviewHistoryPeriodStartDateTime property value. A timestamp. Reviews starting on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.
     * @returns a Date
     */
    public get reviewHistoryPeriodStartDateTime() {
        return this._reviewHistoryPeriodStartDateTime;
    };
    /**
     * Sets the reviewHistoryPeriodStartDateTime property value. A timestamp. Reviews starting on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.
     * @param value Value to set for the reviewHistoryPeriodStartDateTime property.
     */
    public set reviewHistoryPeriodStartDateTime(value: Date | undefined) {
        if(value) {
            this._reviewHistoryPeriodStartDateTime = value;
        }
    };
    /**
     * Gets the scheduleSettings property value. The settings for a recurring access review history definition series. Only required if reviewHistoryPeriodStartDateTime or reviewHistoryPeriodEndDateTime are not defined. Not supported yet.
     * @returns a AccessReviewHistoryScheduleSettingsInterface
     */
    public get scheduleSettings() {
        return this._scheduleSettings;
    };
    /**
     * Sets the scheduleSettings property value. The settings for a recurring access review history definition series. Only required if reviewHistoryPeriodStartDateTime or reviewHistoryPeriodEndDateTime are not defined. Not supported yet.
     * @param value Value to set for the scheduleSettings property.
     */
    public set scheduleSettings(value: AccessReviewHistoryScheduleSettings | undefined) {
        if(value) {
            this._scheduleSettings = value instanceof AccessReviewHistoryScheduleSettingsImpl? value : new AccessReviewHistoryScheduleSettingsImpl(value);
        }
    };
    /**
     * Gets the scopes property value. Used to scope what reviews are included in the fetched history data. Fetches reviews whose scope matches with this provided scope. Required.
     * @returns a AccessReviewScopeInterface
     */
    public get scopes() {
        return this._scopes;
    };
    /**
     * Sets the scopes property value. Used to scope what reviews are included in the fetched history data. Fetches reviews whose scope matches with this provided scope. Required.
     * @param value Value to set for the scopes property.
     */
    public set scopes(value: AccessReviewScope[] | undefined) {
        if(value) {
            const scopesArrValue: AccessReviewScopeImpl[] = [];
            this.scopes?.forEach(element => {
                scopesArrValue.push((element instanceof AccessReviewScopeImpl? element:new AccessReviewScopeImpl(element)));
            });
            this._scopes = scopesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdBy){
            writer.writeObjectValue<UserIdentityImpl>("createdBy", (!this.createdBy || this.createdBy instanceof UserIdentityImpl? this.createdBy : new UserIdentityImpl(this.createdBy)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.decisions){
            writer.writeCollectionOfPrimitiveValues<string>("decisions", this.decisions);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.instances && this.instances.length != 0){        const instancesArrValue: AccessReviewHistoryInstanceImpl[] = [];
        this.instances?.forEach(element => {
            instancesArrValue.push((element instanceof AccessReviewHistoryInstanceImpl? element:new AccessReviewHistoryInstanceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewHistoryInstanceImpl>("instances", instancesArrValue);
        }
        if(this.reviewHistoryPeriodEndDateTime){
            writer.writeDateValue("reviewHistoryPeriodEndDateTime", this.reviewHistoryPeriodEndDateTime);
        }
        if(this.reviewHistoryPeriodStartDateTime){
            writer.writeDateValue("reviewHistoryPeriodStartDateTime", this.reviewHistoryPeriodStartDateTime);
        }
        if(this.scheduleSettings){
            writer.writeObjectValue<AccessReviewHistoryScheduleSettingsImpl>("scheduleSettings", (!this.scheduleSettings || this.scheduleSettings instanceof AccessReviewHistoryScheduleSettingsImpl? this.scheduleSettings : new AccessReviewHistoryScheduleSettingsImpl(this.scheduleSettings)));
        }
        if(this.scopes && this.scopes.length != 0){        const scopesArrValue: AccessReviewScopeImpl[] = [];
        this.scopes?.forEach(element => {
            scopesArrValue.push((element instanceof AccessReviewScopeImpl? element:new AccessReviewScopeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewScopeImpl>("scopes", scopesArrValue);
        }
        if(this.status){
            writer.writeEnumValue<AccessReviewHistoryStatus>("status", this.status);
        }
    };
    /**
     * Gets the status property value. Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue.
     * @returns a accessReviewHistoryStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: AccessReviewHistoryStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
