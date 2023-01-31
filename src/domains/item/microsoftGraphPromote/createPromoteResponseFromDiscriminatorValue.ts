import {PromoteResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPromoteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PromoteResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PromoteResponse();
}
