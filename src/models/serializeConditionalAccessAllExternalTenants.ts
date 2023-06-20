import {ConditionalAccessAllExternalTenants} from './conditionalAccessAllExternalTenants';
import {serializeConditionalAccessExternalTenants} from './serializeConditionalAccessExternalTenants';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessAllExternalTenants(conditionalAccessAllExternalTenants: ConditionalAccessAllExternalTenants | undefined = {} as ConditionalAccessAllExternalTenants, writer: SerializationWriter) : void {
        serializeConditionalAccessExternalTenants(writer, conditionalAccessAllExternalTenants)
}
