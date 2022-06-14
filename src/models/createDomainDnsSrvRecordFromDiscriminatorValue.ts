import {DomainDnsSrvRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsSrvRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsSrvRecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsSrvRecord();
}
