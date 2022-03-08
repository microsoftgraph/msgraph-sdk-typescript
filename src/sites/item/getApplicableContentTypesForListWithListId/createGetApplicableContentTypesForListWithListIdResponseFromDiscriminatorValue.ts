import {GetApplicableContentTypesForListWithListIdResponse} from './getApplicableContentTypesForListWithListIdResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetApplicableContentTypesForListWithListIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetApplicableContentTypesForListWithListIdResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetApplicableContentTypesForListWithListIdResponse();
}
