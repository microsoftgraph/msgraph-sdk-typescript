import {deserializeIntoDomainDnsMxRecord} from './deserializeIntoDomainDnsMxRecord';
import {DomainDnsMxRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsMxRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsMxRecord;
}
