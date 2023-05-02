import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthIssueCollectionResponse} from './serviceHealthIssueCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealthIssueCollectionResponse(writer: SerializationWriter, serviceHealthIssueCollectionResponse: ServiceHealthIssueCollectionResponse | undefined = {} as ServiceHealthIssueCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceHealthIssueCollectionResponse)
        writer.writeCollectionOfObjectValues<ServiceHealthIssue>("value", serviceHealthIssueCollectionResponse.value, serializeServiceHealthIssue);
}
