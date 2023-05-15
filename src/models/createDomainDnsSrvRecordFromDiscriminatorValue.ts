import {deserializeIntoDomainDnsSrvRecord} from './deserializeIntoDomainDnsSrvRecord';
import {DomainDnsSrvRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsSrvRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsSrvRecord;
}
