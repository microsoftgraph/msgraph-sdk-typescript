import {createRiskyServicePrincipalHistoryItemFromDiscriminatorValue} from './createRiskyServicePrincipalHistoryItemFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {RiskyServicePrincipal} from './riskyServicePrincipal';
import {RiskyServicePrincipalHistoryItem} from './riskyServicePrincipalHistoryItem';
import {serializeRiskyServicePrincipalHistoryItem} from './serializeRiskyServicePrincipalHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyServicePrincipal(riskyServicePrincipal: RiskyServicePrincipal | undefined = {} as RiskyServicePrincipal) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(riskyServicePrincipal),
        "appId": n => { riskyServicePrincipal.appId = n.getStringValue(); },
        "displayName": n => { riskyServicePrincipal.displayName = n.getStringValue(); },
        "history": n => { riskyServicePrincipal.history = n.getCollectionOfObjectValues<RiskyServicePrincipalHistoryItem>(createRiskyServicePrincipalHistoryItemFromDiscriminatorValue); },
        "isEnabled": n => { riskyServicePrincipal.isEnabled = n.getBooleanValue(); },
        "isProcessing": n => { riskyServicePrincipal.isProcessing = n.getBooleanValue(); },
        "riskDetail": n => { riskyServicePrincipal.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
        "riskLastUpdatedDateTime": n => { riskyServicePrincipal.riskLastUpdatedDateTime = n.getDateValue(); },
        "riskLevel": n => { riskyServicePrincipal.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); },
        "riskState": n => { riskyServicePrincipal.riskState = n.getEnumValue<RiskState>(RiskState); },
        "servicePrincipalType": n => { riskyServicePrincipal.servicePrincipalType = n.getStringValue(); },
    }
}
