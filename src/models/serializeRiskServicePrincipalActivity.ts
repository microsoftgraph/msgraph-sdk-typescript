import {RiskDetail} from './riskDetail';
import {RiskServicePrincipalActivity} from './riskServicePrincipalActivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskServicePrincipalActivity(writer: SerializationWriter, riskServicePrincipalActivity: RiskServicePrincipalActivity | undefined = {} as RiskServicePrincipalActivity) : void {
        writer.writeEnumValue<RiskDetail>("detail", riskServicePrincipalActivity.detail);
        writer.writeStringValue("@odata.type", riskServicePrincipalActivity.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes", riskServicePrincipalActivity.riskEventTypes);
        writer.writeAdditionalData(riskServicePrincipalActivity.additionalData);
}
