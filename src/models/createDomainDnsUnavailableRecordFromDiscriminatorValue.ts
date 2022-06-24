import {DomainDnsUnavailableRecordImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsUnavailableRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsUnavailableRecordImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsUnavailableRecordImpl();
}
