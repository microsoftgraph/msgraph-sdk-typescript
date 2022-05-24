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

export class IdentityGovernanceImpl implements AdditionalDataHolder, IdentityGovernance, Parsable {
    /** The accessReviews property */
    public accessReviews?: AccessReviewSet | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The appConsent property */
    public appConsent?: AppConsentApprovalRoute | undefined;
    /** The entitlementManagement property */
    public entitlementManagement?: EntitlementManagement | undefined;
    /** The termsOfUse property */
    public termsOfUse?: TermsOfUseContainer | undefined;
    /**
     * Instantiates a new IdentityGovernance and sets the default values.
     * @param identityGovernanceParameterValue 
     */
    public constructor(identityGovernanceParameterValue?: IdentityGovernance | undefined) {
        this.accessReviews = identityGovernanceParameterValue?.accessReviews ;
        this.additionalData = identityGovernanceParameterValue?.additionalData ? identityGovernanceParameterValue?.additionalData! : {}
        this.appConsent = identityGovernanceParameterValue?.appConsent ;
        this.entitlementManagement = identityGovernanceParameterValue?.entitlementManagement ;
        this.termsOfUse = identityGovernanceParameterValue?.termsOfUse ;
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
        writer.writeObjectValue<AccessReviewSetImpl>("accessReviews", new AccessReviewSetImpl(this.accessReviews));
        }
        if(this.appConsent){
        writer.writeObjectValue<AppConsentApprovalRouteImpl>("appConsent", new AppConsentApprovalRouteImpl(this.appConsent));
        }
        if(this.entitlementManagement){
        writer.writeObjectValue<EntitlementManagementImpl>("entitlementManagement", new EntitlementManagementImpl(this.entitlementManagement));
        }
        if(this.termsOfUse){
        writer.writeObjectValue<TermsOfUseContainerImpl>("termsOfUse", new TermsOfUseContainerImpl(this.termsOfUse));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
