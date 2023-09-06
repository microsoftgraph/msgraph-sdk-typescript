import { type UriClickSecurityState } from './uriClickSecurityState';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUriClickSecurityState(uriClickSecurityState: UriClickSecurityState | undefined = {} as UriClickSecurityState) : Record<string, (node: ParseNode) => void> {
    return {
        "clickAction": n => { uriClickSecurityState.clickAction = n.getStringValue(); },
        "clickDateTime": n => { uriClickSecurityState.clickDateTime = n.getDateValue(); },
        "id": n => { uriClickSecurityState.id = n.getStringValue(); },
        "@odata.type": n => { uriClickSecurityState.odataType = n.getStringValue(); },
        "sourceId": n => { uriClickSecurityState.sourceId = n.getStringValue(); },
        "uriDomain": n => { uriClickSecurityState.uriDomain = n.getStringValue(); },
        "verdict": n => { uriClickSecurityState.verdict = n.getStringValue(); },
    }
}
