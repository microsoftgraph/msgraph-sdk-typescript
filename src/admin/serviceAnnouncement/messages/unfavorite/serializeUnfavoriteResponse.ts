import {UnfavoriteResponse} from './unfavoriteResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnfavoriteResponse(writer: SerializationWriter, unfavoriteResponse: UnfavoriteResponse | undefined = {} as UnfavoriteResponse) : void {
        writer.writeBooleanValue("value", unfavoriteResponse.value);
        writer.writeAdditionalData(unfavoriteResponse.additionalData);
}
