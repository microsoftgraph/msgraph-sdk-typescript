import {AccessReviewInstance} from './accessReviewInstance';
import {AccessReviewNotificationRecipientItem} from './accessReviewNotificationRecipientItem';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {AccessReviewScheduleSettings} from './accessReviewScheduleSettings';
import {AccessReviewScope} from './accessReviewScope';
import {createAccessReviewInstanceFromDiscriminatorValue} from './createAccessReviewInstanceFromDiscriminatorValue';
import {createAccessReviewNotificationRecipientItemFromDiscriminatorValue} from './createAccessReviewNotificationRecipientItemFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {createAccessReviewScheduleSettingsFromDiscriminatorValue} from './createAccessReviewScheduleSettingsFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {AccessReviewInstanceImpl, AccessReviewNotificationRecipientItemImpl, AccessReviewReviewerScopeImpl, AccessReviewScheduleSettingsImpl, AccessReviewScopeImpl, EntityImpl, UserIdentityImpl} from './index';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewScheduleDefinitionImpl extends EntityImpl implements AccessReviewScheduleDefinition, Parsable {
    /** Defines the list of additional users or group members to be notified of the access review progress. */
    public additionalNotificationRecipients?: AccessReviewNotificationRecipientItem[] | undefined;
    /** User who created this review. Read-only. */
    public createdBy?: UserIdentity | undefined;
    /** Timestamp when the access review series was created. Supports $select. Read-only. */
    public createdDateTime?: Date | undefined;
    /** Description provided by review creators to provide more context of the review to admins. Supports $select. */
    public descriptionForAdmins?: string | undefined;
    /** Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select. */
    public descriptionForReviewers?: string | undefined;
    /** Name of the access review series. Supports $select and $orderBy. Required on create. */
    public displayName?: string | undefined;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select. NOTE: The value of this property will be ignored if fallback reviewers are assigned through the stageSettings property. */
    public fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API. */
    public instanceEnumerationScope?: AccessReviewScope | undefined;
    /** Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence. */
    public instances?: AccessReviewInstance[] | undefined;
    /** Timestamp when the access review series was last modified. Supports $select. Read-only. */
    public lastModifiedDateTime?: Date | undefined;
    /** This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will be ignored if reviewers are assigned through the stageSettings property. */
    public reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Defines the entities whose access is reviewed. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API. */
    public scope?: AccessReviewScope | undefined;
    /** The settings for an access review series, see type definition below. Supports $select. Required on create. */
    public settings?: AccessReviewScheduleSettings | undefined;
    /** This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only. */
    public status?: string | undefined;
    /**
     * Instantiates a new accessReviewScheduleDefinition and sets the default values.
     * @param accessReviewScheduleDefinitionParameterValue 
     */
    public constructor(accessReviewScheduleDefinitionParameterValue?: AccessReviewScheduleDefinition | undefined) {
        super();
        this.additionalNotificationRecipients = accessReviewScheduleDefinitionParameterValue?.additionalNotificationRecipients ;
        this.createdBy = accessReviewScheduleDefinitionParameterValue?.createdBy ;
        this.createdDateTime = accessReviewScheduleDefinitionParameterValue?.createdDateTime ;
        this.descriptionForAdmins = accessReviewScheduleDefinitionParameterValue?.descriptionForAdmins ;
        this.descriptionForReviewers = accessReviewScheduleDefinitionParameterValue?.descriptionForReviewers ;
        this.displayName = accessReviewScheduleDefinitionParameterValue?.displayName ;
        this.fallbackReviewers = accessReviewScheduleDefinitionParameterValue?.fallbackReviewers ;
        this.instanceEnumerationScope = accessReviewScheduleDefinitionParameterValue?.instanceEnumerationScope ;
        this.instances = accessReviewScheduleDefinitionParameterValue?.instances ;
        this.lastModifiedDateTime = accessReviewScheduleDefinitionParameterValue?.lastModifiedDateTime ;
        this.reviewers = accessReviewScheduleDefinitionParameterValue?.reviewers ;
        this.scope = accessReviewScheduleDefinitionParameterValue?.scope ;
        this.settings = accessReviewScheduleDefinitionParameterValue?.settings ;
        this.status = accessReviewScheduleDefinitionParameterValue?.status ;
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
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.additionalNotificationRecipients && this.additionalNotificationRecipients.length != 0){        const additionalNotificationRecipientsArrValue: AccessReviewNotificationRecipientItemImpl[] = []; this.additionalNotificationRecipients?.forEach(element => {additionalNotificationRecipientsArrValue.push(new AccessReviewNotificationRecipientItemImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewNotificationRecipientItemImpl>("additionalNotificationRecipients", additionalNotificationRecipientsArrValue);
        }
        if(this.createdBy){
        writer.writeObjectValue<UserIdentityImpl>("createdBy", new UserIdentityImpl(this.createdBy));
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
        if(this.fallbackReviewers && this.fallbackReviewers.length != 0){        const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = []; this.fallbackReviewers?.forEach(element => {fallbackReviewersArrValue.push(new AccessReviewReviewerScopeImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("fallbackReviewers", fallbackReviewersArrValue);
        }
        if(this.instanceEnumerationScope){
        writer.writeObjectValue<AccessReviewScopeImpl>("instanceEnumerationScope", new AccessReviewScopeImpl(this.instanceEnumerationScope));
        }
        if(this.instances && this.instances.length != 0){        const instancesArrValue: AccessReviewInstanceImpl[] = []; this.instances?.forEach(element => {instancesArrValue.push(new AccessReviewInstanceImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewInstanceImpl>("instances", instancesArrValue);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.reviewers && this.reviewers.length != 0){        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = []; this.reviewers?.forEach(element => {reviewersArrValue.push(new AccessReviewReviewerScopeImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("reviewers", reviewersArrValue);
        }
        if(this.scope){
        writer.writeObjectValue<AccessReviewScopeImpl>("scope", new AccessReviewScopeImpl(this.scope));
        }
        if(this.settings){
        writer.writeObjectValue<AccessReviewScheduleSettingsImpl>("settings", new AccessReviewScheduleSettingsImpl(this.settings));
        }
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
    };
}
