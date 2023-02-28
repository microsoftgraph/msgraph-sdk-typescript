import {LogPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LogPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LogPostRequestBody();
}
