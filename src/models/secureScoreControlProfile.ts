import {ComplianceInformation} from './complianceInformation';
import {Entity} from './entity';
import {SecureScoreControlStateUpdate} from './secureScoreControlStateUpdate';
import {SecurityVendorInformation} from './securityVendorInformation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScoreControlProfile extends Entity, Parsable {
    /**
     * Control action type (Config, Review, Behavior).
     */
    actionType?: string | undefined;
    /**
     * URL to where the control can be actioned.
     */
    actionUrl?: string | undefined;
    /**
     * GUID string for tenant ID.
     */
    azureTenantId?: string | undefined;
    /**
     * The collection of compliance information associated with secure score control
     */
    complianceInformation?: ComplianceInformation[] | undefined;
    /**
     * Control action category (Identity, Data, Device, Apps, Infrastructure).
     */
    controlCategory?: string | undefined;
    /**
     * Flag to indicate where the tenant has marked a control (ignored, thirdParty, reviewed) (supports update).
     */
    controlStateUpdates?: SecureScoreControlStateUpdate[] | undefined;
    /**
     * Flag to indicate if a control is depreciated.
     */
    deprecated?: boolean | undefined;
    /**
     * Resource cost of implemmentating control (low, moderate, high).
     */
    implementationCost?: string | undefined;
    /**
     * Time at which the control profile entity was last modified. The Timestamp type represents date and time
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * max attainable score for the control.
     */
    maxScore?: number | undefined;
    /**
     * Microsoft's stack ranking of control.
     */
    rank?: number | undefined;
    /**
     * Description of what the control will help remediate.
     */
    remediation?: string | undefined;
    /**
     * Description of the impact on users of the remediation.
     */
    remediationImpact?: string | undefined;
    /**
     * Service that owns the control (Exchange, Sharepoint, Azure AD).
     */
    service?: string | undefined;
    /**
     * List of threats the control mitigates (accountBreach, dataDeletion, dataExfiltration, dataSpillage,
     */
    threats?: string[] | undefined;
    /**
     * The tier property
     */
    tier?: string | undefined;
    /**
     * The title property
     */
    title?: string | undefined;
    /**
     * The userImpact property
     */
    userImpact?: string | undefined;
    /**
     * The vendorInformation property
     */
    vendorInformation?: SecurityVendorInformation | undefined;
}
