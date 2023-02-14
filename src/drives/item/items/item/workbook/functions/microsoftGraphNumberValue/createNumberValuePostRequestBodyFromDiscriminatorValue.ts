import {NumberValuePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNumberValuePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : NumberValuePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NumberValuePostRequestBody();
}
