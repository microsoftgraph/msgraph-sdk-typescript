import {SechPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSechPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SechPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SechPostRequestBody();
}
