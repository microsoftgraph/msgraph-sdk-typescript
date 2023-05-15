import {deserializeIntoGetApplicableContentTypesForListWithListIdResponse} from './deserializeIntoGetApplicableContentTypesForListWithListIdResponse';
import {GetApplicableContentTypesForListWithListIdResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetApplicableContentTypesForListWithListIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetApplicableContentTypesForListWithListIdResponse;
}
