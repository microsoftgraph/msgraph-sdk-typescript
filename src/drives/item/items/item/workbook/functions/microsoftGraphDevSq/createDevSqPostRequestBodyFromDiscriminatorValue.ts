import {DevSqPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDevSqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DevSqPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DevSqPostRequestBody();
}
