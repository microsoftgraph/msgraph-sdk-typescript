import {deserializeIntoRunHuntingQueryPostRequestBody} from './deserializeIntoRunHuntingQueryPostRequestBody';
import {RunHuntingQueryPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRunHuntingQueryPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRunHuntingQueryPostRequestBody;
}
