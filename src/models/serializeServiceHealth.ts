import {serializeEntity} from './serializeEntity';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealth(writer: SerializationWriter, serviceHealth: ServiceHealth | undefined = {} as ServiceHealth) : void {
        serializeEntity(writer, serviceHealth)
        writer.writeCollectionOfObjectValues<ServiceHealthIssue>("issues", serviceHealth.issues, serializeServiceHealthIssue);
        writer.writeStringValue("service", serviceHealth.service);
        writer.writeEnumValue<ServiceHealthStatus>("status", serviceHealth.status);
}
