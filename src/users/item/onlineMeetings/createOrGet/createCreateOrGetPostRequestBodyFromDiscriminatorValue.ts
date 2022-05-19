import {CreateOrGetPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateOrGetPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateOrGetPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateOrGetPostRequestBody();
}
