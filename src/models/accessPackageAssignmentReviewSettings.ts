import {AccessReviewExpirationBehavior} from './accessReviewExpirationBehavior';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {EntitlementManagementSchedule, SubjectSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentReviewSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The default decision to apply if the access is not reviewed. The possible values are: keepAccess, removeAccess, acceptAccessRecommendation, unknownFutureValue. */
    private _expirationBehavior?: AccessReviewExpirationBehavior | undefined;
    /** This collection specifies the users who will be the fallback reviewers when the primary reviewers don't respond. */
    private _fallbackReviewers?: SubjectSet[] | undefined;
    /** If true, access reviews are required for assignments through this policy. */
    private _isEnabled?: boolean | undefined;
    /** Specifies whether to display recommendations to the reviewer. The default value is true. */
    private _isRecommendationEnabled?: boolean | undefined;
    /** Specifies whether the reviewer must provide justification for the approval. The default value is true. */
    private _isReviewerJustificationRequired?: boolean | undefined;
    /** Specifies whether the principals can review their own assignments. */
    private _isSelfReview?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** This collection specifies the users or group of users who will review the access package assignments. */
    private _primaryReviewers?: SubjectSet[] | undefined;
    /** When the first review should start and how often it should recur. */
    private _schedule?: EntitlementManagementSchedule | undefined;
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
     * Instantiates a new accessPackageAssignmentReviewSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the expirationBehavior property value. The default decision to apply if the access is not reviewed. The possible values are: keepAccess, removeAccess, acceptAccessRecommendation, unknownFutureValue.
     * @returns a accessReviewExpirationBehavior
     */
    public get expirationBehavior() {
        return this._expirationBehavior;
    };
    /**
     * Sets the expirationBehavior property value. The default decision to apply if the access is not reviewed. The possible values are: keepAccess, removeAccess, acceptAccessRecommendation, unknownFutureValue.
     * @param value Value to set for the expirationBehavior property.
     */
    public set expirationBehavior(value: AccessReviewExpirationBehavior | undefined) {
        this._expirationBehavior = value;
    };
    /**
     * Gets the fallbackReviewers property value. This collection specifies the users who will be the fallback reviewers when the primary reviewers don't respond.
     * @returns a subjectSet
     */
    public get fallbackReviewers() {
        return this._fallbackReviewers;
    };
    /**
     * Sets the fallbackReviewers property value. This collection specifies the users who will be the fallback reviewers when the primary reviewers don't respond.
     * @param value Value to set for the fallbackReviewers property.
     */
    public set fallbackReviewers(value: SubjectSet[] | undefined) {
        this._fallbackReviewers = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expirationBehavior": n => { this.expirationBehavior = n.getEnumValue<AccessReviewExpirationBehavior>(AccessReviewExpirationBehavior); },
            "fallbackReviewers": n => { this.fallbackReviewers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "isRecommendationEnabled": n => { this.isRecommendationEnabled = n.getBooleanValue(); },
            "isReviewerJustificationRequired": n => { this.isReviewerJustificationRequired = n.getBooleanValue(); },
            "isSelfReview": n => { this.isSelfReview = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "primaryReviewers": n => { this.primaryReviewers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
            "schedule": n => { this.schedule = n.getObjectValue<EntitlementManagementSchedule>(createEntitlementManagementScheduleFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isEnabled property value. If true, access reviews are required for assignments through this policy.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. If true, access reviews are required for assignments through this policy.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Gets the isRecommendationEnabled property value. Specifies whether to display recommendations to the reviewer. The default value is true.
     * @returns a boolean
     */
    public get isRecommendationEnabled() {
        return this._isRecommendationEnabled;
    };
    /**
     * Sets the isRecommendationEnabled property value. Specifies whether to display recommendations to the reviewer. The default value is true.
     * @param value Value to set for the isRecommendationEnabled property.
     */
    public set isRecommendationEnabled(value: boolean | undefined) {
        this._isRecommendationEnabled = value;
    };
    /**
     * Gets the isReviewerJustificationRequired property value. Specifies whether the reviewer must provide justification for the approval. The default value is true.
     * @returns a boolean
     */
    public get isReviewerJustificationRequired() {
        return this._isReviewerJustificationRequired;
    };
    /**
     * Sets the isReviewerJustificationRequired property value. Specifies whether the reviewer must provide justification for the approval. The default value is true.
     * @param value Value to set for the isReviewerJustificationRequired property.
     */
    public set isReviewerJustificationRequired(value: boolean | undefined) {
        this._isReviewerJustificationRequired = value;
    };
    /**
     * Gets the isSelfReview property value. Specifies whether the principals can review their own assignments.
     * @returns a boolean
     */
    public get isSelfReview() {
        return this._isSelfReview;
    };
    /**
     * Sets the isSelfReview property value. Specifies whether the principals can review their own assignments.
     * @param value Value to set for the isSelfReview property.
     */
    public set isSelfReview(value: boolean | undefined) {
        this._isSelfReview = value;
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
     * Gets the primaryReviewers property value. This collection specifies the users or group of users who will review the access package assignments.
     * @returns a subjectSet
     */
    public get primaryReviewers() {
        return this._primaryReviewers;
    };
    /**
     * Sets the primaryReviewers property value. This collection specifies the users or group of users who will review the access package assignments.
     * @param value Value to set for the primaryReviewers property.
     */
    public set primaryReviewers(value: SubjectSet[] | undefined) {
        this._primaryReviewers = value;
    };
    /**
     * Gets the schedule property value. When the first review should start and how often it should recur.
     * @returns a entitlementManagementSchedule
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. When the first review should start and how often it should recur.
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: EntitlementManagementSchedule | undefined) {
        this._schedule = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<AccessReviewExpirationBehavior>("expirationBehavior", this.expirationBehavior);
        writer.writeCollectionOfObjectValues<SubjectSet>("fallbackReviewers", this.fallbackReviewers);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeBooleanValue("isRecommendationEnabled", this.isRecommendationEnabled);
        writer.writeBooleanValue("isReviewerJustificationRequired", this.isReviewerJustificationRequired);
        writer.writeBooleanValue("isSelfReview", this.isSelfReview);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<SubjectSet>("primaryReviewers", this.primaryReviewers);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", this.schedule);
        writer.writeAdditionalData(this.additionalData);
    };
}
