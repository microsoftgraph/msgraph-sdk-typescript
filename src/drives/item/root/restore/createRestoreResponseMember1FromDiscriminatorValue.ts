import {RestoreResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestoreResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : RestoreResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RestoreResponseMember1();
}
