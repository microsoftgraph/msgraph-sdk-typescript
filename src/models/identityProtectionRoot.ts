import {RiskDetection} from './riskDetection';
import {RiskyUser} from './riskyUser';

export interface IdentityProtectionRoot{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Risk detection in Azure AD Identity Protection and the associated information about the detection. */
    riskDetections?:RiskDetection[] | undefined;
    /** Users that are flagged as at-risk by Azure AD Identity Protection. */
    riskyUsers?:RiskyUser[] | undefined;
}
