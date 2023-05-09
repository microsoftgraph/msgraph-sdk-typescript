import {RiskDetection} from './riskDetection';
import {RiskyServicePrincipal} from './riskyServicePrincipal';
import {RiskyUser} from './riskyUser';
import {ServicePrincipalRiskDetection} from './servicePrincipalRiskDetection';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProtectionRoot extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string | undefined;
    /** Risk detection in Azure AD Identity Protection and the associated information about the detection. */
    riskDetections?: RiskDetection[] | undefined;
    /** Azure AD service principals that are at risk. */
    riskyServicePrincipals?: RiskyServicePrincipal[] | undefined;
    /** Users that are flagged as at-risk by Azure AD Identity Protection. */
    riskyUsers?: RiskyUser[] | undefined;
    /** Represents information about detected at-risk service principals in an Azure AD tenant. */
    servicePrincipalRiskDetections?: ServicePrincipalRiskDetection[] | undefined;
}
