import {deserializeIntoGetCompatibleHubContentTypesResponse} from './deserializeIntoGetCompatibleHubContentTypesResponse';
import {GetCompatibleHubContentTypesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompatibleHubContentTypesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetCompatibleHubContentTypesResponse;
}
