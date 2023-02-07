import {ErfCPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createErfCPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ErfCPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ErfCPostRequestBody();
}
