import {ConditionalAccessExternalTenants} from './conditionalAccessExternalTenants';
import {ConditionalAccessExternalTenantsMembershipKind} from './conditionalAccessExternalTenantsMembershipKind';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessExternalTenants(conditionalAccessExternalTenants: ConditionalAccessExternalTenants | undefined = {} as ConditionalAccessExternalTenants) : Record<string, (node: ParseNode) => void> {
    return {
        "membershipKind": n => { conditionalAccessExternalTenants.membershipKind = n.getEnumValue<ConditionalAccessExternalTenantsMembershipKind>(ConditionalAccessExternalTenantsMembershipKind); },
        "@odata.type": n => { conditionalAccessExternalTenants.odataType = n.getStringValue(); },
    }
}
