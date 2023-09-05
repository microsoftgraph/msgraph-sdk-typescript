import { type RequiredResourceAccess } from './requiredResourceAccess';
import { type ResourceAccess } from './resourceAccess';
import { serializeResourceAccess } from './serializeResourceAccess';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRequiredResourceAccess(writer: SerializationWriter, requiredResourceAccess: RequiredResourceAccess | undefined = {} as RequiredResourceAccess) : void {
        writer.writeStringValue("@odata.type", requiredResourceAccess.odataType);
        writer.writeCollectionOfObjectValues<ResourceAccess>("resourceAccess", requiredResourceAccess.resourceAccess, serializeResourceAccess);
        writer.writeStringValue("resourceAppId", requiredResourceAccess.resourceAppId);
        writer.writeAdditionalData(requiredResourceAccess.additionalData);
}
