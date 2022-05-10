import {BooleanColumnImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBooleanColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : BooleanColumnImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BooleanColumnImpl();
}
