import {GetApplicableContentTypesForListWithListIdResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetApplicableContentTypesForListWithListIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetApplicableContentTypesForListWithListIdResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetApplicableContentTypesForListWithListIdResponseImpl();
}
