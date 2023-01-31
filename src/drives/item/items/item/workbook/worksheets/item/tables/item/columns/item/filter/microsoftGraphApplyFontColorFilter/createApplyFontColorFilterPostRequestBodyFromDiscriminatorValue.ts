import {ApplyFontColorFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyFontColorFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyFontColorFilterPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyFontColorFilterPostRequestBody();
}
