import { type ConditionalAccessEnumeratedExternalTenants } from './conditionalAccessEnumeratedExternalTenants';
import { deserializeIntoConditionalAccessExternalTenants } from './deserializeIntoConditionalAccessExternalTenants';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessEnumeratedExternalTenants(conditionalAccessEnumeratedExternalTenants: ConditionalAccessEnumeratedExternalTenants | undefined = {} as ConditionalAccessEnumeratedExternalTenants) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessExternalTenants(conditionalAccessEnumeratedExternalTenants),
        "members": n => { conditionalAccessEnumeratedExternalTenants.members = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
