import {GetApplicableContentTypesForListWithListIdMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetApplicableContentTypesForListWithListIdMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetApplicableContentTypesForListWithListIdMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetApplicableContentTypesForListWithListIdMember1();
}
