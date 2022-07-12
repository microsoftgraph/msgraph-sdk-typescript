import {CreateOrGetMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateOrGetMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateOrGetMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateOrGetMember1();
}
