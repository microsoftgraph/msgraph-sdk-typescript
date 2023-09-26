import { createAccessReviewInstanceFromDiscriminatorValue, serializeAccessReviewInstance, type AccessReviewInstance } from './accessReviewInstance';
import { createAccessReviewNotificationRecipientItemFromDiscriminatorValue, serializeAccessReviewNotificationRecipientItem, type AccessReviewNotificationRecipientItem } from './accessReviewNotificationRecipientItem';
import { createAccessReviewReviewerScopeFromDiscriminatorValue, serializeAccessReviewReviewerScope, type AccessReviewReviewerScope } from './accessReviewReviewerScope';
import { createAccessReviewScheduleSettingsFromDiscriminatorValue, serializeAccessReviewScheduleSettings, type AccessReviewScheduleSettings } from './accessReviewScheduleSettings';
import { createAccessReviewScopeFromDiscriminatorValue, serializeAccessReviewScope, type AccessReviewScope } from './accessReviewScope';
import { createAccessReviewStageSettingsFromDiscriminatorValue, serializeAccessReviewStageSettings, type AccessReviewStageSettings } from './accessReviewStageSettings';
import { deserializeIntoEntity, serializeEntity, type Entity } from './entity';
import { createUserIdentityFromDiscriminatorValue, serializeUserIdentity, type UserIdentity } from './userIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AccessReviewScheduleDefinition extends Entity, Parsable {
    /**
     * Defines the list of additional users or group members to be notified of the access review progress.
     */
    additionalNotificationRecipients?: AccessReviewNotificationRecipientItem[];
    /**
     * User who created this review. Read-only.
     */
    createdBy?: UserIdentity;
    /**
     * Timestamp when the access review series was created. Supports $select. Read-only.
     */
    createdDateTime?: Date;
    /**
     * Description provided by review creators to provide more context of the review to admins. Supports $select.
     */
    descriptionForAdmins?: string;
    /**
     * Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select.
     */
    descriptionForReviewers?: string;
    /**
     * Name of the access review series. Supports $select and $orderby. Required on create.
     */
    displayName?: string;
    /**
     * This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select. NOTE: The value of this property will be ignored if fallback reviewers are assigned through the stageSettings property.
     */
    fallbackReviewers?: AccessReviewReviewerScope[];
    /**
     * This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
     */
    instanceEnumerationScope?: AccessReviewScope;
    /**
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     */
    instances?: AccessReviewInstance[];
    /**
     * Timestamp when the access review series was last modified. Supports $select. Read-only.
     */
    lastModifiedDateTime?: Date;
    /**
     * This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will be ignored if reviewers are assigned through the stageSettings property.
     */
    reviewers?: AccessReviewReviewerScope[];
    /**
     * Defines the entities whose access is reviewed. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.
     */
    scope?: AccessReviewScope;
    /**
     * The settings for an access review series, see type definition below. Supports $select. Required on create.
     */
    settings?: AccessReviewScheduleSettings;
    /**
     * Required only for a multi-stage access review to define the stages and their settings. You can break down each review instance into up to three sequential stages, where each stage can have a different set of reviewers, fallback reviewers, and settings. Stages will be created sequentially based on the dependsOn property. Optional.  When this property is defined, its settings are used instead of the corresponding settings in the accessReviewScheduleDefinition object and its settings, reviewers, and fallbackReviewers properties.
     */
    stageSettings?: AccessReviewStageSettings[];
    /**
     * This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only.
     */
    status?: string;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function createAccessReviewScheduleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewScheduleDefinition;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function deserializeIntoAccessReviewScheduleDefinition(accessReviewScheduleDefinition: AccessReviewScheduleDefinition | undefined = {} as AccessReviewScheduleDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewScheduleDefinition),
        "additionalNotificationRecipients": n => { accessReviewScheduleDefinition.additionalNotificationRecipients = n.getCollectionOfObjectValues<AccessReviewNotificationRecipientItem>(createAccessReviewNotificationRecipientItemFromDiscriminatorValue); },
        "createdBy": n => { accessReviewScheduleDefinition.createdBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
        "createdDateTime": n => { accessReviewScheduleDefinition.createdDateTime = n.getDateValue(); },
        "descriptionForAdmins": n => { accessReviewScheduleDefinition.descriptionForAdmins = n.getStringValue(); },
        "descriptionForReviewers": n => { accessReviewScheduleDefinition.descriptionForReviewers = n.getStringValue(); },
        "displayName": n => { accessReviewScheduleDefinition.displayName = n.getStringValue(); },
        "fallbackReviewers": n => { accessReviewScheduleDefinition.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "instanceEnumerationScope": n => { accessReviewScheduleDefinition.instanceEnumerationScope = n.getObjectValue<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
        "instances": n => { accessReviewScheduleDefinition.instances = n.getCollectionOfObjectValues<AccessReviewInstance>(createAccessReviewInstanceFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { accessReviewScheduleDefinition.lastModifiedDateTime = n.getDateValue(); },
        "reviewers": n => { accessReviewScheduleDefinition.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "scope": n => { accessReviewScheduleDefinition.scope = n.getObjectValue<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
        "settings": n => { accessReviewScheduleDefinition.settings = n.getObjectValue<AccessReviewScheduleSettings>(createAccessReviewScheduleSettingsFromDiscriminatorValue); },
        "stageSettings": n => { accessReviewScheduleDefinition.stageSettings = n.getCollectionOfObjectValues<AccessReviewStageSettings>(createAccessReviewStageSettingsFromDiscriminatorValue); },
        "status": n => { accessReviewScheduleDefinition.status = n.getStringValue(); },
    }
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function serializeAccessReviewScheduleDefinition(writer: SerializationWriter, accessReviewScheduleDefinition: AccessReviewScheduleDefinition | undefined = {} as AccessReviewScheduleDefinition) : void {
        serializeEntity(writer, accessReviewScheduleDefinition)
        writer.writeCollectionOfObjectValues<AccessReviewNotificationRecipientItem>("additionalNotificationRecipients", accessReviewScheduleDefinition.additionalNotificationRecipients, );
        writer.writeObjectValue<UserIdentity>("createdBy", accessReviewScheduleDefinition.createdBy, );
        writer.writeDateValue("createdDateTime", accessReviewScheduleDefinition.createdDateTime);
        writer.writeStringValue("descriptionForAdmins", accessReviewScheduleDefinition.descriptionForAdmins);
        writer.writeStringValue("descriptionForReviewers", accessReviewScheduleDefinition.descriptionForReviewers);
        writer.writeStringValue("displayName", accessReviewScheduleDefinition.displayName);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", accessReviewScheduleDefinition.fallbackReviewers, );
        writer.writeObjectValue<AccessReviewScope>("instanceEnumerationScope", accessReviewScheduleDefinition.instanceEnumerationScope, );
        writer.writeCollectionOfObjectValues<AccessReviewInstance>("instances", accessReviewScheduleDefinition.instances, );
        writer.writeDateValue("lastModifiedDateTime", accessReviewScheduleDefinition.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", accessReviewScheduleDefinition.reviewers, );
        writer.writeObjectValue<AccessReviewScope>("scope", accessReviewScheduleDefinition.scope, );
        writer.writeObjectValue<AccessReviewScheduleSettings>("settings", accessReviewScheduleDefinition.settings, );
        writer.writeCollectionOfObjectValues<AccessReviewStageSettings>("stageSettings", accessReviewScheduleDefinition.stageSettings, );
        writer.writeStringValue("status", accessReviewScheduleDefinition.status);
}
