import { type SecurityResource } from './securityResource';
import { SecurityResourceType } from './securityResourceType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSecurityResource(writer: SerializationWriter, securityResource: SecurityResource | undefined = {} as SecurityResource) : void {
        writer.writeStringValue("@odata.type", securityResource.odataType);
        writer.writeStringValue("resource", securityResource.resource);
        writer.writeEnumValue<SecurityResourceType>("resourceType", securityResource.resourceType);
        writer.writeAdditionalData(securityResource.additionalData);
}
