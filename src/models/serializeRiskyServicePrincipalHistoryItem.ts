import type {RiskServicePrincipalActivity} from './riskServicePrincipalActivity';
import type {RiskyServicePrincipalHistoryItem} from './riskyServicePrincipalHistoryItem';
import {serializeRiskServicePrincipalActivity} from './serializeRiskServicePrincipalActivity';
import {serializeRiskyServicePrincipal} from './serializeRiskyServicePrincipal';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyServicePrincipalHistoryItem(writer: SerializationWriter, riskyServicePrincipalHistoryItem: RiskyServicePrincipalHistoryItem | undefined = {} as RiskyServicePrincipalHistoryItem) : void {
        serializeRiskyServicePrincipal(writer, riskyServicePrincipalHistoryItem)
        writer.writeObjectValue<RiskServicePrincipalActivity>("activity", riskyServicePrincipalHistoryItem.activity, serializeRiskServicePrincipalActivity);
        writer.writeStringValue("initiatedBy", riskyServicePrincipalHistoryItem.initiatedBy);
}
