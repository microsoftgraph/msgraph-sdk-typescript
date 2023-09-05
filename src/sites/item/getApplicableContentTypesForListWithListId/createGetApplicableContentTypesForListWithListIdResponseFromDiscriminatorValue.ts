import { deserializeIntoGetApplicableContentTypesForListWithListIdResponse } from './deserializeIntoGetApplicableContentTypesForListWithListIdResponse';
import { type GetApplicableContentTypesForListWithListIdResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetApplicableContentTypesForListWithListIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetApplicableContentTypesForListWithListIdResponse;
}
