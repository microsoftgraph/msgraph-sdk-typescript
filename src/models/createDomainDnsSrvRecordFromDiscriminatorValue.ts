import {DomainDnsSrvRecordImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsSrvRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsSrvRecordImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsSrvRecordImpl();
}
