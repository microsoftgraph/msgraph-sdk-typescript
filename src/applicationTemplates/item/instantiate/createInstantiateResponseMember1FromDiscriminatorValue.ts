import {InstantiateResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInstantiateResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : InstantiateResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InstantiateResponseMember1();
}
