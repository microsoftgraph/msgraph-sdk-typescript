import {serializeEntity} from './serializeEntity';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import type {ServiceHealth} from './serviceHealth';
import type {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthStatus} from './serviceHealthStatus';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealth(writer: SerializationWriter, serviceHealth: ServiceHealth | undefined = {} as ServiceHealth) : void {
        serializeEntity(writer, serviceHealth)
        writer.writeCollectionOfObjectValues<ServiceHealthIssue>("issues", serviceHealth.issues, serializeServiceHealthIssue);
        writer.writeStringValue("service", serviceHealth.service);
        writer.writeEnumValue<ServiceHealthStatus>("status", serviceHealth.status);
}
