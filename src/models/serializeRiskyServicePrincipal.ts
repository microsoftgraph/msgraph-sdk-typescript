import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {RiskyServicePrincipal} from './riskyServicePrincipal';
import {RiskyServicePrincipalHistoryItem} from './riskyServicePrincipalHistoryItem';
import {serializeEntity} from './serializeEntity';
import {serializeRiskyServicePrincipalHistoryItem} from './serializeRiskyServicePrincipalHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyServicePrincipal(writer: SerializationWriter, riskyServicePrincipal: RiskyServicePrincipal | undefined = {} as RiskyServicePrincipal) : void {
        serializeEntity(writer, riskyServicePrincipal)
        writer.writeStringValue("appId", riskyServicePrincipal.appId);
        writer.writeStringValue("displayName", riskyServicePrincipal.displayName);
        writer.writeCollectionOfObjectValues<RiskyServicePrincipalHistoryItem>("history", riskyServicePrincipal.history, serializeRiskyServicePrincipalHistoryItem);
        writer.writeBooleanValue("isEnabled", riskyServicePrincipal.isEnabled);
        writer.writeBooleanValue("isProcessing", riskyServicePrincipal.isProcessing);
        writer.writeEnumValue<RiskDetail>("riskDetail", riskyServicePrincipal.riskDetail);
        writer.writeDateValue("riskLastUpdatedDateTime", riskyServicePrincipal.riskLastUpdatedDateTime);
        writer.writeEnumValue<RiskLevel>("riskLevel", riskyServicePrincipal.riskLevel);
        writer.writeEnumValue<RiskState>("riskState", riskyServicePrincipal.riskState);
        writer.writeStringValue("servicePrincipalType", riskyServicePrincipal.servicePrincipalType);
}
