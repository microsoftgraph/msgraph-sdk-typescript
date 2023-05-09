import {DomainState} from './domainState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainState(domainState: DomainState | undefined = {} as DomainState) : Record<string, (node: ParseNode) => void> {
    return {
        "lastActionDateTime": n => { domainState.lastActionDateTime = n.getDateValue(); },
        "@odata.type": n => { domainState.odataType = n.getStringValue(); },
        "operation": n => { domainState.operation = n.getStringValue(); },
        "status": n => { domainState.status = n.getStringValue(); },
    }
}
