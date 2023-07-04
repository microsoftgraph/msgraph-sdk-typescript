import {Entity} from './entity';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {RiskyServicePrincipalHistoryItem} from './riskyServicePrincipalHistoryItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyServicePrincipal extends Entity, Parsable {
    /**
     * The globally unique identifier for the associated application (its appId property), if any.
     */
    appId?: string | undefined;
    /**
     * The display name for the service principal.
     */
    displayName?: string | undefined;
    /**
     * Represents the risk history of Azure AD service principals.
     */
    history?: RiskyServicePrincipalHistoryItem[] | undefined;
    /**
     * true if the service principal account is enabled; otherwise, false.
     */
    isEnabled?: boolean | undefined;
    /**
     * Indicates whether Azure AD is currently processing the service principal's risky state.
     */
    isProcessing?: boolean | undefined;
    /**
     * Details of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: none, hidden,  unknownFutureValue, adminConfirmedServicePrincipalCompromised, adminDismissedAllRiskForServicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: adminConfirmedServicePrincipalCompromised , adminDismissedAllRiskForServicePrincipal.
     */
    riskDetail?: RiskDetail | undefined;
    /**
     * The date and time that the risk state was last updated. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2021 is 2021-01-01T00:00:00Z. Supports $filter (eq).
     */
    riskLastUpdatedDateTime?: Date | undefined;
    /**
     * Level of the detected risky workload identity. The possible values are: low, medium, high, hidden, none, unknownFutureValue. Supports $filter (eq).
     */
    riskLevel?: RiskLevel | undefined;
    /**
     * State of the service principal's risk. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue.
     */
    riskState?: RiskState | undefined;
    /**
     * Identifies whether the service principal represents an Application, a ManagedIdentity, or a legacy application (socialIdp). This is set by Azure AD internally and is inherited from servicePrincipal.
     */
    servicePrincipalType?: string | undefined;
}
