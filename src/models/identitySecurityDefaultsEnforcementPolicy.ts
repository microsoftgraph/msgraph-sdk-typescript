import {PolicyBase} from './policyBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentitySecurityDefaultsEnforcementPolicy extends Partial<AdditionalDataHolder>, Partial<Parsable>, PolicyBase {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If set to true, Azure Active Directory security defaults is enabled for the tenant. */
    isEnabled?: boolean | undefined;
}
