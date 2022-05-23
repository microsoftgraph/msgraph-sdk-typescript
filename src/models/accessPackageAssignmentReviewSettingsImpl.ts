import {AccessPackageAssignmentReviewSettings} from './accessPackageAssignmentReviewSettings';
import {AccessReviewExpirationBehavior} from './accessReviewExpirationBehavior';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {EntitlementManagementScheduleImpl, SubjectSetImpl} from './index';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentReviewSettingsImpl implements AccessPackageAssignmentReviewSettings, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The default decision to apply if the access is not reviewed. The possible values are: keepAccess, removeAccess, acceptAccessRecommendation, unknownFutureValue. */
    public expirationBehavior?: AccessReviewExpirationBehavior | undefined;
    /** This collection specifies the users who will be the fallback reviewers when the primary reviewers don't respond. */
    public fallbackReviewers?: SubjectSet[] | undefined;
    /** If true, access reviews are required for assignments through this policy. */
    public isEnabled?: boolean | undefined;
    /** Specifies whether to display recommendations to the reviewer. The default value is true. */
    public isRecommendationEnabled?: boolean | undefined;
    /** Specifies whether the reviewer must provide justification for the approval. The default value is true. */
    public isReviewerJustificationRequired?: boolean | undefined;
    /** Specifies whether the principals can review their own assignments. */
    public isSelfReview?: boolean | undefined;
    /** This collection specifies the users or group of users who will review the access package assignments. */
    public primaryReviewers?: SubjectSet[] | undefined;
    /** When the first review should start and how often it should recur. */
    public schedule?: EntitlementManagementSchedule | undefined;
    /**
     * Instantiates a new accessPackageAssignmentReviewSettings and sets the default values.
     * @param accessPackageAssignmentReviewSettingsParameterValue 
     */
    public constructor(accessPackageAssignmentReviewSettingsParameterValue?: AccessPackageAssignmentReviewSettings | undefined) {
        this.additionalData = accessPackageAssignmentReviewSettingsParameterValue?.additionalData ? accessPackageAssignmentReviewSettingsParameterValue?.additionalData! : {}
        this.expirationBehavior = accessPackageAssignmentReviewSettingsParameterValue?.expirationBehavior ;
        this.fallbackReviewers = accessPackageAssignmentReviewSettingsParameterValue?.fallbackReviewers ;
        this.isEnabled = accessPackageAssignmentReviewSettingsParameterValue?.isEnabled ;
        this.isRecommendationEnabled = accessPackageAssignmentReviewSettingsParameterValue?.isRecommendationEnabled ;
        this.isReviewerJustificationRequired = accessPackageAssignmentReviewSettingsParameterValue?.isReviewerJustificationRequired ;
        this.isSelfReview = accessPackageAssignmentReviewSettingsParameterValue?.isSelfReview ;
        this.primaryReviewers = accessPackageAssignmentReviewSettingsParameterValue?.primaryReviewers ;
        this.schedule = accessPackageAssignmentReviewSettingsParameterValue?.schedule ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expirationBehavior": n => { this.expirationBehavior = n.getEnumValue<AccessReviewExpirationBehavior>(AccessReviewExpirationBehavior); },
            "fallbackReviewers": n => { this.fallbackReviewers = n.getCollectionOfObjectValues<SubjectSetImpl>(createSubjectSetFromDiscriminatorValue); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "isRecommendationEnabled": n => { this.isRecommendationEnabled = n.getBooleanValue(); },
            "isReviewerJustificationRequired": n => { this.isReviewerJustificationRequired = n.getBooleanValue(); },
            "isSelfReview": n => { this.isSelfReview = n.getBooleanValue(); },
            "primaryReviewers": n => { this.primaryReviewers = n.getCollectionOfObjectValues<SubjectSetImpl>(createSubjectSetFromDiscriminatorValue); },
            "schedule": n => { this.schedule = n.getObjectValue<EntitlementManagementScheduleImpl>(createEntitlementManagementScheduleFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.expirationBehavior){
        writer.writeEnumValue<AccessReviewExpirationBehavior>("expirationBehavior", this.expirationBehavior);
        }
        if(this.fallbackReviewers && this.fallbackReviewers.length != 0){        const fallbackReviewersArrValue: SubjectSetImpl[] = []; this.fallbackReviewers?.forEach(element => {fallbackReviewersArrValue.push(new SubjectSetImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectSetImpl>("fallbackReviewers", fallbackReviewersArrValue);
        }
        if(this.isEnabled){
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        if(this.isRecommendationEnabled){
        writer.writeBooleanValue("isRecommendationEnabled", this.isRecommendationEnabled);
        }
        if(this.isReviewerJustificationRequired){
        writer.writeBooleanValue("isReviewerJustificationRequired", this.isReviewerJustificationRequired);
        }
        if(this.isSelfReview){
        writer.writeBooleanValue("isSelfReview", this.isSelfReview);
        }
        if(this.primaryReviewers && this.primaryReviewers.length != 0){        const primaryReviewersArrValue: SubjectSetImpl[] = []; this.primaryReviewers?.forEach(element => {primaryReviewersArrValue.push(new SubjectSetImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectSetImpl>("primaryReviewers", primaryReviewersArrValue);
        }
        if(this.schedule){
        writer.writeObjectValue<EntitlementManagementScheduleImpl>("schedule", new EntitlementManagementScheduleImpl(this.schedule));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
