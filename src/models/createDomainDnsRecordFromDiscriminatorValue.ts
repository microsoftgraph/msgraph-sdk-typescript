import {DomainDnsRecordImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsRecordImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsRecordImpl();
}
