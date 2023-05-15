import {deserializeIntoPromoteResponse} from './deserializeIntoPromoteResponse';
import {PromoteResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPromoteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPromoteResponse;
}
