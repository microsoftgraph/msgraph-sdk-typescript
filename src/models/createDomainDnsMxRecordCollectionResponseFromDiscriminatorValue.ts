import {DomainDnsMxRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsMxRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsMxRecordCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsMxRecordCollectionResponse();
}
