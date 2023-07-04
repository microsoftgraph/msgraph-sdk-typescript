import {CrossTenantAccessPolicyTarget} from './crossTenantAccessPolicyTarget';
import {CrossTenantAccessPolicyTargetConfigurationAccessType} from './crossTenantAccessPolicyTargetConfigurationAccessType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyTargetConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Defines whether access is allowed or blocked. The possible values are: allowed, blocked, unknownFutureValue.
     */
    accessType?: CrossTenantAccessPolicyTargetConfigurationAccessType | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies whether to target users, groups, or applications with this rule.
     */
    targets?: CrossTenantAccessPolicyTarget[] | undefined;
}
