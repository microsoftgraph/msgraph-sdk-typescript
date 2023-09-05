import { type UnfavoriteResponse } from './unfavoriteResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnfavoriteResponse(writer: SerializationWriter, unfavoriteResponse: UnfavoriteResponse | undefined = {} as UnfavoriteResponse) : void {
        writer.writeBooleanValue("value", unfavoriteResponse.value);
        writer.writeAdditionalData(unfavoriteResponse.additionalData);
}
