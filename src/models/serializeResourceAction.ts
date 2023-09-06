import { type ResourceAction } from './resourceAction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeResourceAction(writer: SerializationWriter, resourceAction: ResourceAction | undefined = {} as ResourceAction) : void {
        writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", resourceAction.allowedResourceActions);
        writer.writeCollectionOfPrimitiveValues<string>("notAllowedResourceActions", resourceAction.notAllowedResourceActions);
        writer.writeStringValue("@odata.type", resourceAction.odataType);
        writer.writeAdditionalData(resourceAction.additionalData);
}
