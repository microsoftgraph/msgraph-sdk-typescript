import {ValuePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValuePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValuePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValuePostRequestBody();
}
