import {DeletedImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeletedFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeletedImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeletedImpl();
}
