import {deserializeIntoTentativelyAcceptPostRequestBody} from './deserializeIntoTentativelyAcceptPostRequestBody';
import {TentativelyAcceptPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTentativelyAcceptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTentativelyAcceptPostRequestBody;
}
