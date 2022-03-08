import {DeltaResponse} from './deltaResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeltaResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeltaResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeltaResponse();
}
