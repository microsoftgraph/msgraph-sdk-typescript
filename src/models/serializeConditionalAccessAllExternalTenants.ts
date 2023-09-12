import { type ConditionalAccessAllExternalTenants } from './conditionalAccessAllExternalTenants';
import { serializeConditionalAccessExternalTenants } from './serializeConditionalAccessExternalTenants';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessAllExternalTenants(writer: SerializationWriter, conditionalAccessAllExternalTenants: ConditionalAccessAllExternalTenants | undefined = {} as ConditionalAccessAllExternalTenants) : void {
        serializeConditionalAccessExternalTenants(writer, conditionalAccessAllExternalTenants)
}
