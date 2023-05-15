import {createServiceHealthIssueFromDiscriminatorValue} from './createServiceHealthIssueFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthIssueCollectionResponse} from './serviceHealthIssueCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthIssueCollectionResponse(serviceHealthIssueCollectionResponse: ServiceHealthIssueCollectionResponse | undefined = {} as ServiceHealthIssueCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceHealthIssueCollectionResponse),
        "value": n => { serviceHealthIssueCollectionResponse.value = n.getCollectionOfObjectValues<ServiceHealthIssue>(createServiceHealthIssueFromDiscriminatorValue); },
    }
}
