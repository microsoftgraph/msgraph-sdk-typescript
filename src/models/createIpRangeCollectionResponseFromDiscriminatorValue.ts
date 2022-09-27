import {IpRangeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpRangeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpRangeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IpRangeCollectionResponse();
}
