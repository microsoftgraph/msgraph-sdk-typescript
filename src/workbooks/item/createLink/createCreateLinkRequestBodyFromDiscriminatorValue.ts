import {CreateLinkRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateLinkRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateLinkRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateLinkRequestBodyImpl();
}
