import type {ConditionalAccessEnumeratedExternalTenants} from './conditionalAccessEnumeratedExternalTenants';
import {serializeConditionalAccessExternalTenants} from './serializeConditionalAccessExternalTenants';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessEnumeratedExternalTenants(writer: SerializationWriter, conditionalAccessEnumeratedExternalTenants: ConditionalAccessEnumeratedExternalTenants | undefined = {} as ConditionalAccessEnumeratedExternalTenants) : void {
        serializeConditionalAccessExternalTenants(writer, conditionalAccessEnumeratedExternalTenants)
        writer.writeCollectionOfPrimitiveValues<string>("members", conditionalAccessEnumeratedExternalTenants.members);
}
