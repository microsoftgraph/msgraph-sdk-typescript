import {RiskDetail} from './riskDetail';
import {RiskUserActivity} from './riskUserActivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskUserActivity(writer: SerializationWriter, riskUserActivity: RiskUserActivity | undefined = {} as RiskUserActivity) : void {
        writer.writeEnumValue<RiskDetail>("detail", riskUserActivity.detail);
        writer.writeStringValue("@odata.type", riskUserActivity.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes", riskUserActivity.riskEventTypes);
        writer.writeAdditionalData(riskUserActivity.additionalData);
}
