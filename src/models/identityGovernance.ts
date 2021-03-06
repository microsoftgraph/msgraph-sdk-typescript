import {createAccessReviewSetFromDiscriminatorValue} from './createAccessReviewSetFromDiscriminatorValue';
import {createAppConsentApprovalRouteFromDiscriminatorValue} from './createAppConsentApprovalRouteFromDiscriminatorValue';
import {createEntitlementManagementFromDiscriminatorValue} from './createEntitlementManagementFromDiscriminatorValue';
import {createTermsOfUseContainerFromDiscriminatorValue} from './createTermsOfUseContainerFromDiscriminatorValue';
import {AccessReviewSet, AppConsentApprovalRoute, EntitlementManagement, TermsOfUseContainer} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityGovernance implements AdditionalDataHolder, Parsable {
    /** The accessReviews property */
    private _accessReviews?: AccessReviewSet | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The appConsent property */
    private _appConsent?: AppConsentApprovalRoute | undefined;
    /** The entitlementManagement property */
    private _entitlementManagement?: EntitlementManagement | undefined;
    /** The termsOfUse property */
    private _termsOfUse?: TermsOfUseContainer | undefined;
    /**
     * Gets the accessReviews property value. The accessReviews property
     * @returns a accessReviewSet
     */
    public get accessReviews() {
        return this._accessReviews;
    };
    /**
     * Sets the accessReviews property value. The accessReviews property
     * @param value Value to set for the accessReviews property.
     */
    public set accessReviews(value: AccessReviewSet | undefined) {
        this._accessReviews = value;
    };
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
     * Gets the appConsent property value. The appConsent property
     * @returns a appConsentApprovalRoute
     */
    public get appConsent() {
        return this._appConsent;
    };
    /**
     * Sets the appConsent property value. The appConsent property
     * @param value Value to set for the appConsent property.
     */
    public set appConsent(value: AppConsentApprovalRoute | undefined) {
        this._appConsent = value;
    };
    /**
     * Instantiates a new IdentityGovernance and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the entitlementManagement property value. The entitlementManagement property
     * @returns a entitlementManagement
     */
    public get entitlementManagement() {
        return this._entitlementManagement;
    };
    /**
     * Sets the entitlementManagement property value. The entitlementManagement property
     * @param value Value to set for the entitlementManagement property.
     */
    public set entitlementManagement(value: EntitlementManagement | undefined) {
        this._entitlementManagement = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accessReviews": n => { this.accessReviews = n.getObjectValue<AccessReviewSet>(createAccessReviewSetFromDiscriminatorValue); },
            "appConsent": n => { this.appConsent = n.getObjectValue<AppConsentApprovalRoute>(createAppConsentApprovalRouteFromDiscriminatorValue); },
            "entitlementManagement": n => { this.entitlementManagement = n.getObjectValue<EntitlementManagement>(createEntitlementManagementFromDiscriminatorValue); },
            "termsOfUse": n => { this.termsOfUse = n.getObjectValue<TermsOfUseContainer>(createTermsOfUseContainerFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AccessReviewSet>("accessReviews", this.accessReviews);
        writer.writeObjectValue<AppConsentApprovalRoute>("appConsent", this.appConsent);
        writer.writeObjectValue<EntitlementManagement>("entitlementManagement", this.entitlementManagement);
        writer.writeObjectValue<TermsOfUseContainer>("termsOfUse", this.termsOfUse);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the termsOfUse property value. The termsOfUse property
     * @returns a termsOfUseContainer
     */
    public get termsOfUse() {
        return this._termsOfUse;
    };
    /**
     * Sets the termsOfUse property value. The termsOfUse property
     * @param value Value to set for the termsOfUse property.
     */
    public set termsOfUse(value: TermsOfUseContainer | undefined) {
        this._termsOfUse = value;
    };
}
