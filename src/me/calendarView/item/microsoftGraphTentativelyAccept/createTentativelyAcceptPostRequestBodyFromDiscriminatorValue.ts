import {TentativelyAcceptPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTentativelyAcceptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TentativelyAcceptPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TentativelyAcceptPostRequestBody();
}
