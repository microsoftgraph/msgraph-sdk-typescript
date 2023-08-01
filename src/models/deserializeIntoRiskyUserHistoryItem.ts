import {createRiskUserActivityFromDiscriminatorValue} from './createRiskUserActivityFromDiscriminatorValue';
import {deserializeIntoRiskyUser} from './deserializeIntoRiskyUser';
import type {RiskUserActivity} from './riskUserActivity';
import type {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import {serializeRiskUserActivity} from './serializeRiskUserActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyUserHistoryItem(riskyUserHistoryItem: RiskyUserHistoryItem | undefined = {} as RiskyUserHistoryItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRiskyUser(riskyUserHistoryItem),
        "activity": n => { riskyUserHistoryItem.activity = n.getObjectValue<RiskUserActivity>(createRiskUserActivityFromDiscriminatorValue); },
        "initiatedBy": n => { riskyUserHistoryItem.initiatedBy = n.getStringValue(); },
        "userId": n => { riskyUserHistoryItem.userId = n.getStringValue(); },
    }
}
