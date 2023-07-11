import {RiskDetail} from './riskDetail';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RiskServicePrincipalActivity extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Details of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: none, hidden, adminConfirmedServicePrincipalCompromised, adminDismissedAllRiskForServicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: adminConfirmedServicePrincipalCompromised , adminDismissedAllRiskForServicePrincipal.
     */
    detail?: RiskDetail | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The riskEventTypes property
     */
    riskEventTypes?: string[] | undefined;
}
