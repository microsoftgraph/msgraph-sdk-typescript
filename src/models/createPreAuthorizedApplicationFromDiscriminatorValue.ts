import {PreAuthorizedApplicationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPreAuthorizedApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PreAuthorizedApplicationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PreAuthorizedApplicationImpl();
}
