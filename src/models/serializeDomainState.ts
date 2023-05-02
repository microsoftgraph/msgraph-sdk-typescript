import {DomainState} from './domainState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainState(writer: SerializationWriter, domainState: DomainState | undefined = {} as DomainState) : void {
        writer.writeDateValue("lastActionDateTime", domainState.lastActionDateTime);
        writer.writeStringValue("@odata.type", domainState.odataType);
        writer.writeStringValue("operation", domainState.operation);
        writer.writeStringValue("status", domainState.status);
        writer.writeAdditionalData(domainState.additionalData);
}
