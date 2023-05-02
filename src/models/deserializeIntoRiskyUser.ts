import {createRiskyUserHistoryItemFromDiscriminatorValue} from './createRiskyUserHistoryItemFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {RiskyUser} from './riskyUser';
import {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import {serializeRiskyUserHistoryItem} from './serializeRiskyUserHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyUser(riskyUser: RiskyUser | undefined = {} as RiskyUser) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(riskyUser),
        "history": n => { riskyUser.history = n.getCollectionOfObjectValues<RiskyUserHistoryItem>(createRiskyUserHistoryItemFromDiscriminatorValue); },
        "isDeleted": n => { riskyUser.isDeleted = n.getBooleanValue(); },
        "isProcessing": n => { riskyUser.isProcessing = n.getBooleanValue(); },
        "riskDetail": n => { riskyUser.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
        "riskLastUpdatedDateTime": n => { riskyUser.riskLastUpdatedDateTime = n.getDateValue(); },
        "riskLevel": n => { riskyUser.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); },
        "riskState": n => { riskyUser.riskState = n.getEnumValue<RiskState>(RiskState); },
        "userDisplayName": n => { riskyUser.userDisplayName = n.getStringValue(); },
        "userPrincipalName": n => { riskyUser.userPrincipalName = n.getStringValue(); },
    }
}
