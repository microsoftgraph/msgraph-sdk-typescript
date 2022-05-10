import {CreateOrGetRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateOrGetRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateOrGetRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateOrGetRequestBodyImpl();
}
