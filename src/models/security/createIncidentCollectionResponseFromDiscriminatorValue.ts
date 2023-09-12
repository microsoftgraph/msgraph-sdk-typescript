import { deserializeIntoIncidentCollectionResponse } from './deserializeIntoIncidentCollectionResponse';
import { type IncidentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIncidentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIncidentCollectionResponse;
}
