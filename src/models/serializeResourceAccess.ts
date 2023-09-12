import { type ResourceAccess } from './resourceAccess';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function serializeResourceAccess(writer: SerializationWriter, resourceAccess: ResourceAccess | undefined = {} as ResourceAccess) : void {
        writer.writeGuidValue("id", resourceAccess.id);
        writer.writeStringValue("@odata.type", resourceAccess.odataType);
        writer.writeStringValue("type", resourceAccess.type);
        writer.writeAdditionalData(resourceAccess.additionalData);
}
