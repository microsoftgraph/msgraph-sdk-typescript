import {AvailabilityItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAvailabilityItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AvailabilityItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AvailabilityItemCollectionResponse();
}
