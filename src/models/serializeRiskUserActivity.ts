import { RiskDetail } from './riskDetail';
import { type RiskUserActivity } from './riskUserActivity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRiskUserActivity(writer: SerializationWriter, riskUserActivity: RiskUserActivity | undefined = {} as RiskUserActivity) : void {
        writer.writeEnumValue<RiskDetail>("detail", riskUserActivity.detail);
        writer.writeStringValue("@odata.type", riskUserActivity.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes", riskUserActivity.riskEventTypes);
        writer.writeAdditionalData(riskUserActivity.additionalData);
}
