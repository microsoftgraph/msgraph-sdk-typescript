import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AdminConsentRequestPolicy} from './adminConsentRequestPolicy';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {AccessReviewReviewerScopeImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class AdminConsentRequestPolicyImpl extends EntityImpl implements AdminConsentRequestPolicy {
    /** Specifies whether the admin consent request feature is enabled or disabled. Required. */
    private _isEnabled?: boolean | undefined;
    /** Specifies whether reviewers will receive notifications. Required. */
    private _notifyReviewers?: boolean | undefined;
    /** Specifies whether reviewers will receive reminder emails. Required. */
    private _remindersEnabled?: boolean | undefined;
    /** Specifies the duration the request is active before it automatically expires if no decision is applied. */
    private _requestDurationInDays?: number | undefined;
    /** Required. */
    private _reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Specifies the version of this policy. When the policy is updated, this version is updated. Read-only. */
    private _version?: number | undefined;
    /**
     * Instantiates a new adminConsentRequestPolicy and sets the default values.
     * @param adminConsentRequestPolicyParameterValue 
     */
    public constructor(adminConsentRequestPolicyParameterValue?: AdminConsentRequestPolicy | undefined) {
        super(adminConsentRequestPolicyParameterValue);
        this._isEnabled = adminConsentRequestPolicyParameterValue?.isEnabled;
        this._notifyReviewers = adminConsentRequestPolicyParameterValue?.notifyReviewers;
        this._remindersEnabled = adminConsentRequestPolicyParameterValue?.remindersEnabled;
        this._requestDurationInDays = adminConsentRequestPolicyParameterValue?.requestDurationInDays;
        this._reviewers = adminConsentRequestPolicyParameterValue?.reviewers;
        this._version = adminConsentRequestPolicyParameterValue?.version;
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
     * Gets the isEnabled property value. Specifies whether the admin consent request feature is enabled or disabled. Required.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Specifies whether the admin consent request feature is enabled or disabled. Required.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        if(value) {
            this._isEnabled = value;
        }
    };
    /**
     * Gets the notifyReviewers property value. Specifies whether reviewers will receive notifications. Required.
     * @returns a boolean
     */
    public get notifyReviewers() {
        return this._notifyReviewers;
    };
    /**
     * Sets the notifyReviewers property value. Specifies whether reviewers will receive notifications. Required.
     * @param value Value to set for the notifyReviewers property.
     */
    public set notifyReviewers(value: boolean | undefined) {
        if(value) {
            this._notifyReviewers = value;
        }
    };
    /**
     * Gets the remindersEnabled property value. Specifies whether reviewers will receive reminder emails. Required.
     * @returns a boolean
     */
    public get remindersEnabled() {
        return this._remindersEnabled;
    };
    /**
     * Sets the remindersEnabled property value. Specifies whether reviewers will receive reminder emails. Required.
     * @param value Value to set for the remindersEnabled property.
     */
    public set remindersEnabled(value: boolean | undefined) {
        if(value) {
            this._remindersEnabled = value;
        }
    };
    /**
     * Gets the requestDurationInDays property value. Specifies the duration the request is active before it automatically expires if no decision is applied.
     * @returns a integer
     */
    public get requestDurationInDays() {
        return this._requestDurationInDays;
    };
    /**
     * Sets the requestDurationInDays property value. Specifies the duration the request is active before it automatically expires if no decision is applied.
     * @param value Value to set for the requestDurationInDays property.
     */
    public set requestDurationInDays(value: number | undefined) {
        if(value) {
            this._requestDurationInDays = value;
        }
    };
    /**
     * Gets the reviewers property value. Required.
     * @returns a AccessReviewReviewerScopeInterface
     */
    public get reviewers() {
        return this._reviewers;
    };
    /**
     * Sets the reviewers property value. Required.
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
        if(this.reviewers && this.reviewers.length != 0){        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = [];
        this.reviewers?.forEach(element => {
            reviewersArrValue.push((element instanceof AccessReviewReviewerScopeImpl? element:new AccessReviewReviewerScopeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("reviewers", reviewersArrValue);
        }
        if(this.version){
            writer.writeNumberValue("version", this.version);
        }
    };
    /**
     * Gets the version property value. Specifies the version of this policy. When the policy is updated, this version is updated. Read-only.
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Specifies the version of this policy. When the policy is updated, this version is updated. Read-only.
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
