import {MinutePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMinutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MinutePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MinutePostRequestBody();
}
