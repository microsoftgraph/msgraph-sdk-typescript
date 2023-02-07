import {Dec2OctPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDec2OctPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Dec2OctPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Dec2OctPostRequestBody();
}
