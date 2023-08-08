import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import type {RiskyUser} from './riskyUser';
import type {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import {serializeEntity} from './serializeEntity';
import {serializeRiskyUserHistoryItem} from './serializeRiskyUserHistoryItem';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyUser(writer: SerializationWriter, riskyUser: RiskyUser | undefined = {} as RiskyUser) : void {
        serializeEntity(writer, riskyUser)
        writer.writeCollectionOfObjectValues<RiskyUserHistoryItem>("history", riskyUser.history, serializeRiskyUserHistoryItem);
        writer.writeBooleanValue("isDeleted", riskyUser.isDeleted);
        writer.writeBooleanValue("isProcessing", riskyUser.isProcessing);
        writer.writeEnumValue<RiskDetail>("riskDetail", riskyUser.riskDetail);
        writer.writeDateValue("riskLastUpdatedDateTime", riskyUser.riskLastUpdatedDateTime);
        writer.writeEnumValue<RiskLevel>("riskLevel", riskyUser.riskLevel);
        writer.writeEnumValue<RiskState>("riskState", riskyUser.riskState);
        writer.writeStringValue("userDisplayName", riskyUser.userDisplayName);
        writer.writeStringValue("userPrincipalName", riskyUser.userPrincipalName);
}
