import {TentativelyAcceptRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTentativelyAcceptRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TentativelyAcceptRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TentativelyAcceptRequestBodyImpl();
}
