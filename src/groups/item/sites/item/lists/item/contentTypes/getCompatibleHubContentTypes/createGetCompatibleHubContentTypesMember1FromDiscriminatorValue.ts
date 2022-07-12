import {GetCompatibleHubContentTypesMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompatibleHubContentTypesMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompatibleHubContentTypesMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompatibleHubContentTypesMember1();
}
