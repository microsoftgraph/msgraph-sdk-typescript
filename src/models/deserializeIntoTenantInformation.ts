import type {TenantInformation} from './tenantInformation';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTenantInformation(tenantInformation: TenantInformation | undefined = {} as TenantInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "defaultDomainName": n => { tenantInformation.defaultDomainName = n.getStringValue(); },
        "displayName": n => { tenantInformation.displayName = n.getStringValue(); },
        "federationBrandName": n => { tenantInformation.federationBrandName = n.getStringValue(); },
        "@odata.type": n => { tenantInformation.odataType = n.getStringValue(); },
        "tenantId": n => { tenantInformation.tenantId = n.getStringValue(); },
    }
}
