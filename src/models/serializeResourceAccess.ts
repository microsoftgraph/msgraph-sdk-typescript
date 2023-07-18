import {ResourceAccess} from './resourceAccess';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeResourceAccess(writer: SerializationWriter, resourceAccess: ResourceAccess | undefined = {} as ResourceAccess) : void {
        writer.writeGuidValue("id", resourceAccess.id);
        writer.writeStringValue("@odata.type", resourceAccess.odataType);
        writer.writeStringValue("type", resourceAccess.type);
        writer.writeAdditionalData(resourceAccess.additionalData);
}
