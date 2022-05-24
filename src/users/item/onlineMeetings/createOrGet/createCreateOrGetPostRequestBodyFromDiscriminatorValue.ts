import {CreateOrGetPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateOrGetPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateOrGetPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateOrGetPostRequestBodyImpl();
}
