import { type RiskUserActivity } from './riskUserActivity';
import { type RiskyUserHistoryItem } from './riskyUserHistoryItem';
import { serializeRiskUserActivity } from './serializeRiskUserActivity';
import { serializeRiskyUser } from './serializeRiskyUser';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRiskyUserHistoryItem(writer: SerializationWriter, riskyUserHistoryItem: RiskyUserHistoryItem | undefined = {} as RiskyUserHistoryItem) : void {
        serializeRiskyUser(writer, riskyUserHistoryItem)
        writer.writeObjectValue<RiskUserActivity>("activity", riskyUserHistoryItem.activity, serializeRiskUserActivity);
        writer.writeStringValue("initiatedBy", riskyUserHistoryItem.initiatedBy);
        writer.writeStringValue("userId", riskyUserHistoryItem.userId);
}
