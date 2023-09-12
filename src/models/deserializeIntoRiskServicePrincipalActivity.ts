import { RiskDetail } from './riskDetail';
import { type RiskServicePrincipalActivity } from './riskServicePrincipalActivity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskServicePrincipalActivity(riskServicePrincipalActivity: RiskServicePrincipalActivity | undefined = {} as RiskServicePrincipalActivity) : Record<string, (node: ParseNode) => void> {
    return {
        "detail": n => { riskServicePrincipalActivity.detail = n.getEnumValue<RiskDetail>(RiskDetail); },
        "@odata.type": n => { riskServicePrincipalActivity.odataType = n.getStringValue(); },
        "riskEventTypes": n => { riskServicePrincipalActivity.riskEventTypes = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
