import {GetCompatibleHubContentTypesResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompatibleHubContentTypesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompatibleHubContentTypesResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompatibleHubContentTypesResponseImpl();
}
