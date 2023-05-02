import {deserializeIntoDomainDnsCnameRecord} from './deserializeIntoDomainDnsCnameRecord';
import {DomainDnsCnameRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsCnameRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsCnameRecord;
}
