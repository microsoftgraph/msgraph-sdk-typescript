import {createRiskServicePrincipalActivityFromDiscriminatorValue} from './createRiskServicePrincipalActivityFromDiscriminatorValue';
import {deserializeIntoRiskyServicePrincipal} from './deserializeIntoRiskyServicePrincipal';
import {RiskServicePrincipalActivity} from './riskServicePrincipalActivity';
import {RiskyServicePrincipalHistoryItem} from './riskyServicePrincipalHistoryItem';
import {serializeRiskServicePrincipalActivity} from './serializeRiskServicePrincipalActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyServicePrincipalHistoryItem(riskyServicePrincipalHistoryItem: RiskyServicePrincipalHistoryItem | undefined = {} as RiskyServicePrincipalHistoryItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRiskyServicePrincipal(riskyServicePrincipalHistoryItem),
        "activity": n => { riskyServicePrincipalHistoryItem.activity = n.getObjectValue<RiskServicePrincipalActivity>(createRiskServicePrincipalActivityFromDiscriminatorValue); },
        "initiatedBy": n => { riskyServicePrincipalHistoryItem.initiatedBy = n.getStringValue(); },
    }
}
