import {RiskDetail} from './riskDetail';
import {RiskServicePrincipalActivity} from './riskServicePrincipalActivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskServicePrincipalActivity(riskServicePrincipalActivity: RiskServicePrincipalActivity | undefined = {} as RiskServicePrincipalActivity) : Record<string, (node: ParseNode) => void> {
    return {
        "detail": n => { riskServicePrincipalActivity.detail = n.getEnumValue<RiskDetail>(RiskDetail); },
        "@odata.type": n => { riskServicePrincipalActivity.odataType = n.getStringValue(); },
        "riskEventTypes": n => { riskServicePrincipalActivity.riskEventTypes = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
