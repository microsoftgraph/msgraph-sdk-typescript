import {deserializeIntoDomainDnsTxtRecord} from './deserializeIntoDomainDnsTxtRecord';
import {DomainDnsTxtRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsTxtRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsTxtRecord;
}
