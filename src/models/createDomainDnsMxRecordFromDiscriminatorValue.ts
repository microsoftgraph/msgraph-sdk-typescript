import {DomainDnsMxRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsMxRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsMxRecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsMxRecord();
}
