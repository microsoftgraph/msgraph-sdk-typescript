import { RiskDetail } from './riskDetail';
import { type RiskServicePrincipalActivity } from './riskServicePrincipalActivity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRiskServicePrincipalActivity(writer: SerializationWriter, riskServicePrincipalActivity: RiskServicePrincipalActivity | undefined = {} as RiskServicePrincipalActivity) : void {
        writer.writeEnumValue<RiskDetail>("detail", riskServicePrincipalActivity.detail);
        writer.writeStringValue("@odata.type", riskServicePrincipalActivity.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes", riskServicePrincipalActivity.riskEventTypes);
        writer.writeAdditionalData(riskServicePrincipalActivity.additionalData);
}
