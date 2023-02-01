import {ImSechPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImSechPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImSechPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImSechPostRequestBody();
}
