import { deserializeIntoGetCompatibleHubContentTypesResponse } from './deserializeIntoGetCompatibleHubContentTypesResponse';
import { type GetCompatibleHubContentTypesResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetCompatibleHubContentTypesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetCompatibleHubContentTypesResponse;
}
