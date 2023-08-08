import {RiskDetail} from './riskDetail';
import type {RiskUserActivity} from './riskUserActivity';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskUserActivity(riskUserActivity: RiskUserActivity | undefined = {} as RiskUserActivity) : Record<string, (node: ParseNode) => void> {
    return {
        "detail": n => { riskUserActivity.detail = n.getEnumValue<RiskDetail>(RiskDetail); },
        "@odata.type": n => { riskUserActivity.odataType = n.getStringValue(); },
        "riskEventTypes": n => { riskUserActivity.riskEventTypes = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
