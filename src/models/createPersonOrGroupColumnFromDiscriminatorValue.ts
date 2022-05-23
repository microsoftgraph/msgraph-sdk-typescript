import {PersonOrGroupColumnImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonOrGroupColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonOrGroupColumnImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonOrGroupColumnImpl();
}
