import {GetCompatibleHubContentTypesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompatibleHubContentTypesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompatibleHubContentTypesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompatibleHubContentTypesResponse();
}
