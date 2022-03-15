import {TentativelyAcceptRequestBody} from './tentativelyAcceptRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTentativelyAcceptRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TentativelyAcceptRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TentativelyAcceptRequestBody();
}
