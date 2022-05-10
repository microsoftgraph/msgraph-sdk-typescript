import {ChoiceColumnImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChoiceColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChoiceColumnImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChoiceColumnImpl();
}
