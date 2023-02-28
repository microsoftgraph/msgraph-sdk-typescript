import {ConvertPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConvertPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConvertPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConvertPostRequestBody();
}
