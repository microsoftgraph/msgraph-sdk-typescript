import {TodoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoFromDiscriminatorValue(parseNode: ParseNode | undefined) : TodoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TodoImpl();
}
