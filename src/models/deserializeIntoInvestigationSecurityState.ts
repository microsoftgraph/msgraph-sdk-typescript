import {InvestigationSecurityState} from './investigationSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvestigationSecurityState(investigationSecurityState: InvestigationSecurityState | undefined = {} as InvestigationSecurityState) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { investigationSecurityState.name = n.getStringValue(); },
        "@odata.type": n => { investigationSecurityState.odataType = n.getStringValue(); },
        "status": n => { investigationSecurityState.status = n.getStringValue(); },
    }
}
