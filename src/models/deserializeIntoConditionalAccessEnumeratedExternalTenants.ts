import {ConditionalAccessEnumeratedExternalTenants} from './conditionalAccessEnumeratedExternalTenants';
import {deserializeIntoConditionalAccessExternalTenants} from './deserializeIntoConditionalAccessExternalTenants';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessEnumeratedExternalTenants(conditionalAccessEnumeratedExternalTenants: ConditionalAccessEnumeratedExternalTenants | undefined = {} as ConditionalAccessEnumeratedExternalTenants) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessExternalTenants(conditionalAccessEnumeratedExternalTenants),
        "members": n => { conditionalAccessEnumeratedExternalTenants.members = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
