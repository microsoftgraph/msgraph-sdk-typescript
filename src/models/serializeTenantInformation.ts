import type {TenantInformation} from './tenantInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTenantInformation(writer: SerializationWriter, tenantInformation: TenantInformation | undefined = {} as TenantInformation) : void {
        writer.writeStringValue("defaultDomainName", tenantInformation.defaultDomainName);
        writer.writeStringValue("displayName", tenantInformation.displayName);
        writer.writeStringValue("federationBrandName", tenantInformation.federationBrandName);
        writer.writeStringValue("@odata.type", tenantInformation.odataType);
        writer.writeStringValue("tenantId", tenantInformation.tenantId);
        writer.writeAdditionalData(tenantInformation.additionalData);
}
