import {IncompleteDataImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncompleteDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : IncompleteDataImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IncompleteDataImpl();
}
