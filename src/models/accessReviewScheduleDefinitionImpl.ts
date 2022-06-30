import {AccessReviewInstance} from './accessReviewInstance';
import {AccessReviewNotificationRecipientItem} from './accessReviewNotificationRecipientItem';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {AccessReviewScheduleSettings} from './accessReviewScheduleSettings';
import {AccessReviewScope} from './accessReviewScope';
import {AccessReviewStageSettings} from './accessReviewStageSettings';
import {createAccessReviewInstanceFromDiscriminatorValue} from './createAccessReviewInstanceFromDiscriminatorValue';
import {createAccessReviewNotificationRecipientItemFromDiscriminatorValue} from './createAccessReviewNotificationRecipientItemFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {createAccessReviewScheduleSettingsFromDiscriminatorValue} from './createAccessReviewScheduleSettingsFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {createAccessReviewStageSettingsFromDiscriminatorValue} from './createAccessReviewStageSettingsFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {AccessReviewInstanceImpl, AccessReviewNotificationRecipientItemImpl, AccessReviewReviewerScopeImpl, AccessReviewScheduleSettingsImpl, AccessReviewScopeImpl, AccessReviewStageSettingsImpl, EntityImpl, UserIdentityImpl} from './index';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewScheduleDefinitionImpl extends EntityImpl implements AccessReviewScheduleDefinition {
    /** Defines the list of additional users or group members to be notified of the access review progress. */
    private _additionalNotificationRecipients?: AccessReviewNotificationRecipientItem[] | undefined;
    /** User who created this review. Read-only. */
    private _createdBy?: UserIdentity | undefined;
    /** Timestamp when the access review series was created. Supports $select. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** Description provided by review creators to provide more context of the review to admins. Supports $select. */
    private _descriptionForAdmins?: string | undefined;
    /** Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select. */
    private _descriptionForReviewers?: string | undefined;
    /** Name of the access review series. Supports $select and $orderBy. Required on create. */
    private _displayName?: string | undefined;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select. NOTE: The value of this property will be ignored if fallback reviewers are assigned through the stageSettings property. */
    private _fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API. */
    private _instanceEnumerationScope?: AccessReviewScope | undefined;
    /** Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence. */
    private _instances?: AccessReviewInstance[] | undefined;
    /** Timestamp when the access review series was last modified. Supports $select. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will be ignored if reviewers are assigned through the stageSettings property. */
    private _reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Defines the entities whose access is reviewed. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API. */
    private _scope?: AccessReviewScope | undefined;
    /** The settings for an access review series, see type definition below. Supports $select. Required on create. */
    private _settings?: AccessReviewScheduleSettings | undefined;
    /** Required only for a multi-stage access review to define the stages and their settings. You can break down each review instance into up to three sequential stages, where each stage can have a different set of reviewers, fallback reviewers, and settings. Stages will be created sequentially based on the dependsOn property. Optional.  When this property is defined, its settings are used instead of the corresponding settings in the accessReviewScheduleDefinition object and its settings, reviewers, and fallbackReviewers properties. */
    private _stageSettings?: AccessReviewStageSettings[] | undefined;
    /** This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only. */
    private _status?: string | undefined;
    /**
     * Gets the additionalNotificationRecipients property value. Defines the list of additional users or group members to be notified of the access review progress.
     * @returns a AccessReviewNotificationRecipientItemInterface
     */
    public get additionalNotificationRecipients() {
        return this._additionalNotificationRecipients;
    };
    /**
     * Sets the additionalNotificationRecipients property value. Defines the list of additional users or group members to be notified of the access review progress.
     * @param value Value to set for the additionalNotificationRecipients property.
     */
    public set additionalNotificationRecipients(value: AccessReviewNotificationRecipientItem[] | undefined) {
        if(value) {
            const additionalNotificationRecipientsArrValue: AccessReviewNotificationRecipientItemImpl[] = [];
            this.additionalNotificationRecipients?.forEach(element => {
                additionalNotificationRecipientsArrValue.push((element instanceof AccessReviewNotificationRecipientItemImpl? element:new AccessReviewNotificationRecipientItemImpl(element)));
            });
            this._additionalNotificationRecipients = additionalNotificationRecipientsArrValue;
        }
    };
    /**
     * Instantiates a new accessReviewScheduleDefinition and sets the default values.
     * @param accessReviewScheduleDefinitionParameterValue 
     */
    public constructor(accessReviewScheduleDefinitionParameterValue?: AccessReviewScheduleDefinition | undefined) {
        super(accessReviewScheduleDefinitionParameterValue);
        this._additionalNotificationRecipients = accessReviewScheduleDefinitionParameterValue?.additionalNotificationRecipients;
        this._createdBy = accessReviewScheduleDefinitionParameterValue?.createdBy;
        this._createdDateTime = accessReviewScheduleDefinitionParameterValue?.createdDateTime;
        this._descriptionForAdmins = accessReviewScheduleDefinitionParameterValue?.descriptionForAdmins;
        this._descriptionForReviewers = accessReviewScheduleDefinitionParameterValue?.descriptionForReviewers;
        this._displayName = accessReviewScheduleDefinitionParameterValue?.displayName;
        this._fallbackReviewers = accessReviewScheduleDefinitionParameterValue?.fallbackReviewers;
        this._instanceEnumerationScope = accessReviewScheduleDefinitionParameterValue?.instanceEnumerationScope;
        this._instances = accessReviewScheduleDefinitionParameterValue?.instances;
        this._lastModifiedDateTime = accessReviewScheduleDefinitionParameterValue?.lastModifiedDateTime;
        this._reviewers = accessReviewScheduleDefinitionParameterValue?.reviewers;
        this._scope = accessReviewScheduleDefinitionParameterValue?.scope;
        this._settings = accessReviewScheduleDefinitionParameterValue?.settings;
        this._stageSettings = accessReviewScheduleDefinitionParameterValue?.stageSettings;
        this._status = accessReviewScheduleDefinitionParameterValue?.status;
    };
    /**
     * Gets the createdBy property value. User who created this review. Read-only.
     * @returns a UserIdentityInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. User who created this review. Read-only.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: UserIdentity | undefined) {
        if(value) {
            this._createdBy = value instanceof UserIdentityImpl? value : new UserIdentityImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. Timestamp when the access review series was created. Supports $select. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp when the access review series was created. Supports $select. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the descriptionForAdmins property value. Description provided by review creators to provide more context of the review to admins. Supports $select.
     * @returns a string
     */
    public get descriptionForAdmins() {
        return this._descriptionForAdmins;
    };
    /**
     * Sets the descriptionForAdmins property value. Description provided by review creators to provide more context of the review to admins. Supports $select.
     * @param value Value to set for the descriptionForAdmins property.
     */
    public set descriptionForAdmins(value: string | undefined) {
        if(value) {
            this._descriptionForAdmins = value;
        }
    };
    /**
     * Gets the descriptionForReviewers property value. Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select.
     * @returns a string
     */
    public get descriptionForReviewers() {
        return this._descriptionForReviewers;
    };
    /**
     * Sets the descriptionForReviewers property value. Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select.
     * @param value Value to set for the descriptionForReviewers property.
     */
    public set descriptionForReviewers(value: string | undefined) {
        if(value) {
            this._descriptionForReviewers = value;
        }
    };
    /**
     * Gets the displayName property value. Name of the access review series. Supports $select and $orderBy. Required on create.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the access review series. Supports $select and $orderBy. Required on create.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select. NOTE: The value of this property will be ignored if fallback reviewers are assigned through the stageSettings property.
     * @returns a AccessReviewReviewerScopeInterface
     */
    public get fallbackReviewers() {
        return this._fallbackReviewers;
    };
    /**
     * Sets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select. NOTE: The value of this property will be ignored if fallback reviewers are assigned through the stageSettings property.
     * @param value Value to set for the fallbackReviewers property.
     */
    public set fallbackReviewers(value: AccessReviewReviewerScope[] | undefined) {
        if(value) {
            const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = [];
            this.fallbackReviewers?.forEach(element => {
                fallbackReviewersArrValue.push((element instanceof AccessReviewReviewerScopeImpl? element:new AccessReviewReviewerScopeImpl(element)));
            });
            this._fallbackReviewers = fallbackReviewersArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalNotificationRecipients": n => { this.additionalNotificationRecipients = n.getCollectionOfObjectValues<AccessReviewNotificationRecipientItemImpl>(createAccessReviewNotificationRecipientItemFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<UserIdentityImpl>(createUserIdentityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "descriptionForAdmins": n => { this.descriptionForAdmins = n.getStringValue(); },
            "descriptionForReviewers": n => { this.descriptionForReviewers = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "fallbackReviewers": n => { this.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScopeImpl>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "instanceEnumerationScope": n => { this.instanceEnumerationScope = n.getObjectValue<AccessReviewScopeImpl>(createAccessReviewScopeFromDiscriminatorValue); },
            "instances": n => { this.instances = n.getCollectionOfObjectValues<AccessReviewInstanceImpl>(createAccessReviewInstanceFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "reviewers": n => { this.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScopeImpl>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "scope": n => { this.scope = n.getObjectValue<AccessReviewScopeImpl>(createAccessReviewScopeFromDiscriminatorValue); },
            "settings": n => { this.settings = n.getObjectValue<AccessReviewScheduleSettingsImpl>(createAccessReviewScheduleSettingsFromDiscriminatorValue); },
            "stageSettings": n => { this.stageSettings = n.getCollectionOfObjectValues<AccessReviewStageSettingsImpl>(createAccessReviewStageSettingsFromDiscriminatorValue); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the instanceEnumerationScope property value. This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @returns a AccessReviewScopeInterface
     */
    public get instanceEnumerationScope() {
        return this._instanceEnumerationScope;
    };
    /**
     * Sets the instanceEnumerationScope property value. This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @param value Value to set for the instanceEnumerationScope property.
     */
    public set instanceEnumerationScope(value: AccessReviewScope | undefined) {
        if(value) {
            this._instanceEnumerationScope = value instanceof AccessReviewScopeImpl? value : new AccessReviewScopeImpl(value);
        }
    };
    /**
     * Gets the instances property value. Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
     * @returns a AccessReviewInstanceInterface
     */
    public get instances() {
        return this._instances;
    };
    /**
     * Sets the instances property value. Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
     * @param value Value to set for the instances property.
     */
    public set instances(value: AccessReviewInstance[] | undefined) {
        if(value) {
            const instancesArrValue: AccessReviewInstanceImpl[] = [];
            this.instances?.forEach(element => {
                instancesArrValue.push((element instanceof AccessReviewInstanceImpl? element:new AccessReviewInstanceImpl(element)));
            });
            this._instances = instancesArrValue;
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. Timestamp when the access review series was last modified. Supports $select. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Timestamp when the access review series was last modified. Supports $select. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the reviewers property value. This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will be ignored if reviewers are assigned through the stageSettings property.
     * @returns a AccessReviewReviewerScopeInterface
     */
    public get reviewers() {
        return this._reviewers;
    };
    /**
     * Sets the reviewers property value. This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will be ignored if reviewers are assigned through the stageSettings property.
     * @param value Value to set for the reviewers property.
     */
    public set reviewers(value: AccessReviewReviewerScope[] | undefined) {
        if(value) {
            const reviewersArrValue: AccessReviewReviewerScopeImpl[] = [];
            this.reviewers?.forEach(element => {
                reviewersArrValue.push((element instanceof AccessReviewReviewerScopeImpl? element:new AccessReviewReviewerScopeImpl(element)));
            });
            this._reviewers = reviewersArrValue;
        }
    };
    /**
     * Gets the scope property value. Defines the entities whose access is reviewed. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @returns a AccessReviewScopeInterface
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. Defines the entities whose access is reviewed. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @param value Value to set for the scope property.
     */
    public set scope(value: AccessReviewScope | undefined) {
        if(value) {
            this._scope = value instanceof AccessReviewScopeImpl? value : new AccessReviewScopeImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.additionalNotificationRecipients && this.additionalNotificationRecipients.length != 0){        const additionalNotificationRecipientsArrValue: AccessReviewNotificationRecipientItemImpl[] = [];
        this.additionalNotificationRecipients?.forEach(element => {
            additionalNotificationRecipientsArrValue.push((element instanceof AccessReviewNotificationRecipientItemImpl? element:new AccessReviewNotificationRecipientItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewNotificationRecipientItemImpl>("additionalNotificationRecipients", additionalNotificationRecipientsArrValue);
        }
        if(this.createdBy){
            writer.writeObjectValue<UserIdentityImpl>("createdBy", (!this.createdBy || this.createdBy instanceof UserIdentityImpl? this.createdBy : new UserIdentityImpl(this.createdBy)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.descriptionForAdmins){
            writer.writeStringValue("descriptionForAdmins", this.descriptionForAdmins);
        }
        if(this.descriptionForReviewers){
            writer.writeStringValue("descriptionForReviewers", this.descriptionForReviewers);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.fallbackReviewers && this.fallbackReviewers.length != 0){        const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = [];
        this.fallbackReviewers?.forEach(element => {
            fallbackReviewersArrValue.push((element instanceof AccessReviewReviewerScopeImpl? element:new AccessReviewReviewerScopeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("fallbackReviewers", fallbackReviewersArrValue);
        }
        if(this.instanceEnumerationScope){
            writer.writeObjectValue<AccessReviewScopeImpl>("instanceEnumerationScope", (!this.instanceEnumerationScope || this.instanceEnumerationScope instanceof AccessReviewScopeImpl? this.instanceEnumerationScope : new AccessReviewScopeImpl(this.instanceEnumerationScope)));
        }
        if(this.instances && this.instances.length != 0){        const instancesArrValue: AccessReviewInstanceImpl[] = [];
        this.instances?.forEach(element => {
            instancesArrValue.push((element instanceof AccessReviewInstanceImpl? element:new AccessReviewInstanceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewInstanceImpl>("instances", instancesArrValue);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.reviewers && this.reviewers.length != 0){        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = [];
        this.reviewers?.forEach(element => {
            reviewersArrValue.push((element instanceof AccessReviewReviewerScopeImpl? element:new AccessReviewReviewerScopeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("reviewers", reviewersArrValue);
        }
        if(this.scope){
            writer.writeObjectValue<AccessReviewScopeImpl>("scope", (!this.scope || this.scope instanceof AccessReviewScopeImpl? this.scope : new AccessReviewScopeImpl(this.scope)));
        }
        if(this.settings){
            writer.writeObjectValue<AccessReviewScheduleSettingsImpl>("settings", (!this.settings || this.settings instanceof AccessReviewScheduleSettingsImpl? this.settings : new AccessReviewScheduleSettingsImpl(this.settings)));
        }
        if(this.stageSettings && this.stageSettings.length != 0){        const stageSettingsArrValue: AccessReviewStageSettingsImpl[] = [];
        this.stageSettings?.forEach(element => {
            stageSettingsArrValue.push((element instanceof AccessReviewStageSettingsImpl? element:new AccessReviewStageSettingsImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewStageSettingsImpl>("stageSettings", stageSettingsArrValue);
        }
        if(this.status){
            writer.writeStringValue("status", this.status);
        }
    };
    /**
     * Gets the settings property value. The settings for an access review series, see type definition below. Supports $select. Required on create.
     * @returns a AccessReviewScheduleSettingsInterface
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings for an access review series, see type definition below. Supports $select. Required on create.
     * @param value Value to set for the settings property.
     */
    public set settings(value: AccessReviewScheduleSettings | undefined) {
        if(value) {
            this._settings = value instanceof AccessReviewScheduleSettingsImpl? value : new AccessReviewScheduleSettingsImpl(value);
        }
    };
    /**
     * Gets the stageSettings property value. Required only for a multi-stage access review to define the stages and their settings. You can break down each review instance into up to three sequential stages, where each stage can have a different set of reviewers, fallback reviewers, and settings. Stages will be created sequentially based on the dependsOn property. Optional.  When this property is defined, its settings are used instead of the corresponding settings in the accessReviewScheduleDefinition object and its settings, reviewers, and fallbackReviewers properties.
     * @returns a AccessReviewStageSettingsInterface
     */
    public get stageSettings() {
        return this._stageSettings;
    };
    /**
     * Sets the stageSettings property value. Required only for a multi-stage access review to define the stages and their settings. You can break down each review instance into up to three sequential stages, where each stage can have a different set of reviewers, fallback reviewers, and settings. Stages will be created sequentially based on the dependsOn property. Optional.  When this property is defined, its settings are used instead of the corresponding settings in the accessReviewScheduleDefinition object and its settings, reviewers, and fallbackReviewers properties.
     * @param value Value to set for the stageSettings property.
     */
    public set stageSettings(value: AccessReviewStageSettings[] | undefined) {
        if(value) {
            const stageSettingsArrValue: AccessReviewStageSettingsImpl[] = [];
            this.stageSettings?.forEach(element => {
                stageSettingsArrValue.push((element instanceof AccessReviewStageSettingsImpl? element:new AccessReviewStageSettingsImpl(element)));
            });
            this._stageSettings = stageSettingsArrValue;
        }
    };
    /**
     * Gets the status property value. This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
