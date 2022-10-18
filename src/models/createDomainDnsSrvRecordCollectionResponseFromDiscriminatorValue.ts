import {DomainDnsSrvRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsSrvRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsSrvRecordCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsSrvRecordCollectionResponse();
}
