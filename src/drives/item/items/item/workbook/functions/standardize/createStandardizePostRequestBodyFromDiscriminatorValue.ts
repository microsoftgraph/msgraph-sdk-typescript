import {StandardizePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStandardizePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StandardizePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StandardizePostRequestBody();
}
