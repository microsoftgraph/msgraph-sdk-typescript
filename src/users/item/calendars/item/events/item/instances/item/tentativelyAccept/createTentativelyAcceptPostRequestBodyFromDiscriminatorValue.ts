import {TentativelyAcceptPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTentativelyAcceptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TentativelyAcceptPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TentativelyAcceptPostRequestBodyImpl();
}
