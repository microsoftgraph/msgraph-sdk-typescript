import {InstantiatePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInstantiatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : InstantiatePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InstantiatePostRequestBodyImpl();
}
