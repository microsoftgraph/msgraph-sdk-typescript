import {ConditionalAccessExternalTenants} from './conditionalAccessExternalTenants';
import {ConditionalAccessExternalTenantsMembershipKind} from './conditionalAccessExternalTenantsMembershipKind';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessExternalTenants(conditionalAccessExternalTenants: ConditionalAccessExternalTenants | undefined = {} as ConditionalAccessExternalTenants, writer: SerializationWriter) : void {
        writer.writeEnumValue<ConditionalAccessExternalTenantsMembershipKind>("membershipKind", conditionalAccessExternalTenants.membershipKind);
        writer.writeStringValue("@odata.type", conditionalAccessExternalTenants.odataType);
        writer.writeAdditionalData(conditionalAccessExternalTenants.additionalData);
}
