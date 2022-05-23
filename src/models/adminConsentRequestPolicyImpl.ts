import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AdminConsentRequestPolicy} from './adminConsentRequestPolicy';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {AccessReviewReviewerScopeImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class AdminConsentRequestPolicyImpl extends EntityImpl implements AdminConsentRequestPolicy, Parsable {
    /** Specifies whether the admin consent request feature is enabled or disabled. Required. */
    public isEnabled?: boolean | undefined;
    /** Specifies whether reviewers will receive notifications. Required. */
    public notifyReviewers?: boolean | undefined;
    /** Specifies whether reviewers will receive reminder emails. Required. */
    public remindersEnabled?: boolean | undefined;
    /** Specifies the duration the request is active before it automatically expires if no decision is applied. */
    public requestDurationInDays?: number | undefined;
    /** Required. */
    public reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Specifies the version of this policy. When the policy is updated, this version is updated. Read-only. */
    public version?: number | undefined;
    /**
     * Instantiates a new adminConsentRequestPolicy and sets the default values.
     * @param adminConsentRequestPolicyParameterValue 
     */
    public constructor(adminConsentRequestPolicyParameterValue?: AdminConsentRequestPolicy | undefined) {
        super();
        this.isEnabled = adminConsentRequestPolicyParameterValue?.isEnabled ;
        this.notifyReviewers = adminConsentRequestPolicyParameterValue?.notifyReviewers ;
        this.remindersEnabled = adminConsentRequestPolicyParameterValue?.remindersEnabled ;
        this.requestDurationInDays = adminConsentRequestPolicyParameterValue?.requestDurationInDays ;
        this.reviewers = adminConsentRequestPolicyParameterValue?.reviewers ;
        this.version = adminConsentRequestPolicyParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "notifyReviewers": n => { this.notifyReviewers = n.getBooleanValue(); },
            "remindersEnabled": n => { this.remindersEnabled = n.getBooleanValue(); },
            "requestDurationInDays": n => { this.requestDurationInDays = n.getNumberValue(); },
            "reviewers": n => { this.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScopeImpl>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "version": n => { this.version = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.isEnabled){
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        if(this.notifyReviewers){
        writer.writeBooleanValue("notifyReviewers", this.notifyReviewers);
        }
        if(this.remindersEnabled){
        writer.writeBooleanValue("remindersEnabled", this.remindersEnabled);
        }
        if(this.requestDurationInDays){
        writer.writeNumberValue("requestDurationInDays", this.requestDurationInDays);
        }
        if(this.reviewers && this.reviewers.length != 0){        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = []; this.reviewers?.forEach(element => {reviewersArrValue.push(new AccessReviewReviewerScopeImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("reviewers", reviewersArrValue);
        }
        if(this.version){
        writer.writeNumberValue("version", this.version);
        }
    };
}
