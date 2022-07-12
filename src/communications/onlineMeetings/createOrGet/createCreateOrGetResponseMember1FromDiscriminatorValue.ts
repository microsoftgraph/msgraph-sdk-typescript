import {CreateOrGetResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateOrGetResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateOrGetResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateOrGetResponseMember1();
}
