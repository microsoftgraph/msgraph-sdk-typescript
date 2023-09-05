import { type SecurityResource } from './securityResource';
import { SecurityResourceType } from './securityResourceType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityResource(securityResource: SecurityResource | undefined = {} as SecurityResource) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { securityResource.odataType = n.getStringValue(); },
        "resource": n => { securityResource.resource = n.getStringValue(); },
        "resourceType": n => { securityResource.resourceType = n.getEnumValue<SecurityResourceType>(SecurityResourceType); },
    }
}
