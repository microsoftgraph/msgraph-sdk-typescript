import {AccessReviewSet} from './accessReviewSet';
import {AppConsentApprovalRoute} from './appConsentApprovalRoute';
import {createAccessReviewSetFromDiscriminatorValue} from './createAccessReviewSetFromDiscriminatorValue';
import {createAppConsentApprovalRouteFromDiscriminatorValue} from './createAppConsentApprovalRouteFromDiscriminatorValue';
import {createEntitlementManagementFromDiscriminatorValue} from './createEntitlementManagementFromDiscriminatorValue';
import {createTermsOfUseContainerFromDiscriminatorValue} from './createTermsOfUseContainerFromDiscriminatorValue';
import {EntitlementManagement} from './entitlementManagement';
import {IdentityGovernance} from './identityGovernance';
import {AccessReviewSetImpl, AppConsentApprovalRouteImpl, EntitlementManagementImpl, TermsOfUseContainerImpl} from './index';
import {TermsOfUseContainer} from './termsOfUseContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityGovernanceImpl implements IdentityGovernance {
    /** The accessReviews property */
    private _accessReviews?: AccessReviewSet | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The appConsent property */
    private _appConsent?: AppConsentApprovalRoute | undefined;
    /** The entitlementManagement property */
    private _entitlementManagement?: EntitlementManagement | undefined;
    /** The termsOfUse property */
    private _termsOfUse?: TermsOfUseContainer | undefined;
    /**
     * Gets the accessReviews property value. The accessReviews property
     * @returns a AccessReviewSetInterface
     */
    public get accessReviews() {
        return this._accessReviews;
    };
    /**
     * Sets the accessReviews property value. The accessReviews property
     * @param value Value to set for the accessReviews property.
     */
    public set accessReviews(value: AccessReviewSet | undefined) {
        if(value) {
            this._accessReviews = value instanceof AccessReviewSetImpl? value : new AccessReviewSetImpl(value);
        }
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the appConsent property value. The appConsent property
     * @returns a AppConsentApprovalRouteInterface
     */
    public get appConsent() {
        return this._appConsent;
    };
    /**
     * Sets the appConsent property value. The appConsent property
     * @param value Value to set for the appConsent property.
     */
    public set appConsent(value: AppConsentApprovalRoute | undefined) {
        if(value) {
            this._appConsent = value instanceof AppConsentApprovalRouteImpl? value : new AppConsentApprovalRouteImpl(value);
        }
    };
    /**
     * Instantiates a new IdentityGovernance and sets the default values.
     * @param identityGovernanceParameterValue 
     */
    public constructor(identityGovernanceParameterValue?: IdentityGovernance | undefined) {
        this._accessReviews = identityGovernanceParameterValue?.accessReviews;
        this._additionalData = identityGovernanceParameterValue?.additionalData ? identityGovernanceParameterValue?.additionalData! : {};
        this._appConsent = identityGovernanceParameterValue?.appConsent;
        this._entitlementManagement = identityGovernanceParameterValue?.entitlementManagement;
        this._termsOfUse = identityGovernanceParameterValue?.termsOfUse;
    };
    /**
     * Gets the entitlementManagement property value. The entitlementManagement property
     * @returns a EntitlementManagementInterface
     */
    public get entitlementManagement() {
        return this._entitlementManagement;
    };
    /**
     * Sets the entitlementManagement property value. The entitlementManagement property
     * @param value Value to set for the entitlementManagement property.
     */
    public set entitlementManagement(value: EntitlementManagement | undefined) {
        if(value) {
            this._entitlementManagement = value instanceof EntitlementManagementImpl? value : new EntitlementManagementImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accessReviews": n => { this.accessReviews = n.getObjectValue<AccessReviewSetImpl>(createAccessReviewSetFromDiscriminatorValue); },
            "appConsent": n => { this.appConsent = n.getObjectValue<AppConsentApprovalRouteImpl>(createAppConsentApprovalRouteFromDiscriminatorValue); },
            "entitlementManagement": n => { this.entitlementManagement = n.getObjectValue<EntitlementManagementImpl>(createEntitlementManagementFromDiscriminatorValue); },
            "termsOfUse": n => { this.termsOfUse = n.getObjectValue<TermsOfUseContainerImpl>(createTermsOfUseContainerFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.accessReviews){
            writer.writeObjectValue<AccessReviewSetImpl>("accessReviews", (!this.accessReviews || this.accessReviews instanceof AccessReviewSetImpl? this.accessReviews : new AccessReviewSetImpl(this.accessReviews)));
        }
        if(this.appConsent){
            writer.writeObjectValue<AppConsentApprovalRouteImpl>("appConsent", (!this.appConsent || this.appConsent instanceof AppConsentApprovalRouteImpl? this.appConsent : new AppConsentApprovalRouteImpl(this.appConsent)));
        }
        if(this.entitlementManagement){
            writer.writeObjectValue<EntitlementManagementImpl>("entitlementManagement", (!this.entitlementManagement || this.entitlementManagement instanceof EntitlementManagementImpl? this.entitlementManagement : new EntitlementManagementImpl(this.entitlementManagement)));
        }
        if(this.termsOfUse){
            writer.writeObjectValue<TermsOfUseContainerImpl>("termsOfUse", (!this.termsOfUse || this.termsOfUse instanceof TermsOfUseContainerImpl? this.termsOfUse : new TermsOfUseContainerImpl(this.termsOfUse)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the termsOfUse property value. The termsOfUse property
     * @returns a TermsOfUseContainerInterface
     */
    public get termsOfUse() {
        return this._termsOfUse;
    };
    /**
     * Sets the termsOfUse property value. The termsOfUse property
     * @param value Value to set for the termsOfUse property.
     */
    public set termsOfUse(value: TermsOfUseContainer | undefined) {
        if(value) {
            this._termsOfUse = value instanceof TermsOfUseContainerImpl? value : new TermsOfUseContainerImpl(value);
        }
    };
}
