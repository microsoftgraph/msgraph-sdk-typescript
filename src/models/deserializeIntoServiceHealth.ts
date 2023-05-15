import {createServiceHealthIssueFromDiscriminatorValue} from './createServiceHealthIssueFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealth(serviceHealth: ServiceHealth | undefined = {} as ServiceHealth) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(serviceHealth),
        "issues": n => { serviceHealth.issues = n.getCollectionOfObjectValues<ServiceHealthIssue>(createServiceHealthIssueFromDiscriminatorValue); },
        "service": n => { serviceHealth.service = n.getStringValue(); },
        "status": n => { serviceHealth.status = n.getEnumValue<ServiceHealthStatus>(ServiceHealthStatus); },
    }
}
