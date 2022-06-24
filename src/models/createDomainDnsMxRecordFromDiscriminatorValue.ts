import {DomainDnsMxRecordImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsMxRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsMxRecordImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsMxRecordImpl();
}
