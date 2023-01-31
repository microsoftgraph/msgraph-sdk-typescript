import {CountResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CountResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CountResponse();
}
