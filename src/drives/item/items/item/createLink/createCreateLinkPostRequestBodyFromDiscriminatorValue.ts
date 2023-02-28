import {CreateLinkPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateLinkPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateLinkPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateLinkPostRequestBody();
}
