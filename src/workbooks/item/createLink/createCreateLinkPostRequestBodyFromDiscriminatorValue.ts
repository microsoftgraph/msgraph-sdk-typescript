import {CreateLinkPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateLinkPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateLinkPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateLinkPostRequestBodyImpl();
}
