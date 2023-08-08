import {createServiceHealthIssueFromDiscriminatorValue} from './createServiceHealthIssueFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import type {ServiceHealthIssue} from './serviceHealthIssue';
import type {ServiceHealthIssueCollectionResponse} from './serviceHealthIssueCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthIssueCollectionResponse(serviceHealthIssueCollectionResponse: ServiceHealthIssueCollectionResponse | undefined = {} as ServiceHealthIssueCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceHealthIssueCollectionResponse),
        "value": n => { serviceHealthIssueCollectionResponse.value = n.getCollectionOfObjectValues<ServiceHealthIssue>(createServiceHealthIssueFromDiscriminatorValue); },
    }
}
