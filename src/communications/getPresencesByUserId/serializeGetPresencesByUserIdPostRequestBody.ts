import type {GetPresencesByUserIdPostRequestBody} from './getPresencesByUserIdPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPresencesByUserIdPostRequestBody(writer: SerializationWriter, getPresencesByUserIdPostRequestBody: GetPresencesByUserIdPostRequestBody | undefined = {} as GetPresencesByUserIdPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", getPresencesByUserIdPostRequestBody.ids);
        writer.writeAdditionalData(getPresencesByUserIdPostRequestBody.additionalData);
}
