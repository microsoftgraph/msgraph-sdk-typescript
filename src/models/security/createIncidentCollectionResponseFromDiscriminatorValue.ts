import {IncidentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncidentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IncidentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IncidentCollectionResponse();
}
