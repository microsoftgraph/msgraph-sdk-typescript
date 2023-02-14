import {AndPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndPostRequestBody();
}
