import {createAccessReviewInstanceFromDiscriminatorValue} from './createAccessReviewInstanceFromDiscriminatorValue';
import {createAccessReviewNotificationRecipientItemFromDiscriminatorValue} from './createAccessReviewNotificationRecipientItemFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {createAccessReviewScheduleSettingsFromDiscriminatorValue} from './createAccessReviewScheduleSettingsFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {createAccessReviewStageSettingsFromDiscriminatorValue} from './createAccessReviewStageSettingsFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {AccessReviewInstance, AccessReviewNotificationRecipientItem, AccessReviewReviewerScope, AccessReviewScheduleSettings, AccessReviewScope, AccessReviewStageSettings, Entity, UserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewScheduleDefinition extends Entity implements Parsable {
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
    /** If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence. */
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
     * @returns a accessReviewNotificationRecipientItem
     */
    public get additionalNotificationRecipients() {
        return this._additionalNotificationRecipients;
    };
    /**
     * Sets the additionalNotificationRecipients property value. Defines the list of additional users or group members to be notified of the access review progress.
     * @param value Value to set for the additionalNotificationRecipients property.
     */
    public set additionalNotificationRecipients(value: AccessReviewNotificationRecipientItem[] | undefined) {
        this._additionalNotificationRecipients = value;
    };
    /**
     * Instantiates a new AccessReviewScheduleDefinition and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessReviewScheduleDefinition";
    };
    /**
     * Gets the createdBy property value. User who created this review. Read-only.
     * @returns a userIdentity
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. User who created this review. Read-only.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: UserIdentity | undefined) {
        this._createdBy = value;
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
        this._createdDateTime = value;
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
        this._descriptionForAdmins = value;
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
        this._descriptionForReviewers = value;
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
        this._displayName = value;
    };
    /**
     * Gets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select. NOTE: The value of this property will be ignored if fallback reviewers are assigned through the stageSettings property.
     * @returns a accessReviewReviewerScope
     */
    public get fallbackReviewers() {
        return this._fallbackReviewers;
    };
    /**
     * Sets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select. NOTE: The value of this property will be ignored if fallback reviewers are assigned through the stageSettings property.
     * @param value Value to set for the fallbackReviewers property.
     */
    public set fallbackReviewers(value: AccessReviewReviewerScope[] | undefined) {
        this._fallbackReviewers = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalNotificationRecipients": n => { this.additionalNotificationRecipients = n.getCollectionOfObjectValues<AccessReviewNotificationRecipientItem>(createAccessReviewNotificationRecipientItemFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "descriptionForAdmins": n => { this.descriptionForAdmins = n.getStringValue(); },
            "descriptionForReviewers": n => { this.descriptionForReviewers = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "fallbackReviewers": n => { this.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "instanceEnumerationScope": n => { this.instanceEnumerationScope = n.getObjectValue<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
            "instances": n => { this.instances = n.getCollectionOfObjectValues<AccessReviewInstance>(createAccessReviewInstanceFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "reviewers": n => { this.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "scope": n => { this.scope = n.getObjectValue<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
            "settings": n => { this.settings = n.getObjectValue<AccessReviewScheduleSettings>(createAccessReviewScheduleSettingsFromDiscriminatorValue); },
            "stageSettings": n => { this.stageSettings = n.getCollectionOfObjectValues<AccessReviewStageSettings>(createAccessReviewStageSettingsFromDiscriminatorValue); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the instanceEnumerationScope property value. This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @returns a accessReviewScope
     */
    public get instanceEnumerationScope() {
        return this._instanceEnumerationScope;
    };
    /**
     * Sets the instanceEnumerationScope property value. This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @param value Value to set for the instanceEnumerationScope property.
     */
    public set instanceEnumerationScope(value: AccessReviewScope | undefined) {
        this._instanceEnumerationScope = value;
    };
    /**
     * Gets the instances property value. If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @returns a accessReviewInstance
     */
    public get instances() {
        return this._instances;
    };
    /**
     * Sets the instances property value. If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param value Value to set for the instances property.
     */
    public set instances(value: AccessReviewInstance[] | undefined) {
        this._instances = value;
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
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the reviewers property value. This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will be ignored if reviewers are assigned through the stageSettings property.
     * @returns a accessReviewReviewerScope
     */
    public get reviewers() {
        return this._reviewers;
    };
    /**
     * Sets the reviewers property value. This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will be ignored if reviewers are assigned through the stageSettings property.
     * @param value Value to set for the reviewers property.
     */
    public set reviewers(value: AccessReviewReviewerScope[] | undefined) {
        this._reviewers = value;
    };
    /**
     * Gets the scope property value. Defines the entities whose access is reviewed. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @returns a accessReviewScope
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. Defines the entities whose access is reviewed. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @param value Value to set for the scope property.
     */
    public set scope(value: AccessReviewScope | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessReviewNotificationRecipientItem>("additionalNotificationRecipients", this.additionalNotificationRecipients);
        writer.writeObjectValue<UserIdentity>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("descriptionForAdmins", this.descriptionForAdmins);
        writer.writeStringValue("descriptionForReviewers", this.descriptionForReviewers);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", this.fallbackReviewers);
        writer.writeObjectValue<AccessReviewScope>("instanceEnumerationScope", this.instanceEnumerationScope);
        writer.writeCollectionOfObjectValues<AccessReviewInstance>("instances", this.instances);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", this.reviewers);
        writer.writeObjectValue<AccessReviewScope>("scope", this.scope);
        writer.writeObjectValue<AccessReviewScheduleSettings>("settings", this.settings);
        writer.writeCollectionOfObjectValues<AccessReviewStageSettings>("stageSettings", this.stageSettings);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Gets the settings property value. The settings for an access review series, see type definition below. Supports $select. Required on create.
     * @returns a accessReviewScheduleSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings for an access review series, see type definition below. Supports $select. Required on create.
     * @param value Value to set for the settings property.
     */
    public set settings(value: AccessReviewScheduleSettings | undefined) {
        this._settings = value;
    };
    /**
     * Gets the stageSettings property value. Required only for a multi-stage access review to define the stages and their settings. You can break down each review instance into up to three sequential stages, where each stage can have a different set of reviewers, fallback reviewers, and settings. Stages will be created sequentially based on the dependsOn property. Optional.  When this property is defined, its settings are used instead of the corresponding settings in the accessReviewScheduleDefinition object and its settings, reviewers, and fallbackReviewers properties.
     * @returns a accessReviewStageSettings
     */
    public get stageSettings() {
        return this._stageSettings;
    };
    /**
     * Sets the stageSettings property value. Required only for a multi-stage access review to define the stages and their settings. You can break down each review instance into up to three sequential stages, where each stage can have a different set of reviewers, fallback reviewers, and settings. Stages will be created sequentially based on the dependsOn property. Optional.  When this property is defined, its settings are used instead of the corresponding settings in the accessReviewScheduleDefinition object and its settings, reviewers, and fallbackReviewers properties.
     * @param value Value to set for the stageSettings property.
     */
    public set stageSettings(value: AccessReviewStageSettings[] | undefined) {
        this._stageSettings = value;
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
        this._status = value;
    };
}
