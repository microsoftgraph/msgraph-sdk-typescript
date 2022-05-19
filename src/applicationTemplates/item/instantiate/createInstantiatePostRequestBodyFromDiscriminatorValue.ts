import {InstantiatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInstantiatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : InstantiatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InstantiatePostRequestBody();
}
