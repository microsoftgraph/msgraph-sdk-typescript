import {CreateOrGetRequestBody} from './createOrGetRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateOrGetRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateOrGetRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateOrGetRequestBody();
}
