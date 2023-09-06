import { type GetPresencesByUserIdPostRequestBody } from './getPresencesByUserIdPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetPresencesByUserIdPostRequestBody(writer: SerializationWriter, getPresencesByUserIdPostRequestBody: GetPresencesByUserIdPostRequestBody | undefined = {} as GetPresencesByUserIdPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", getPresencesByUserIdPostRequestBody.ids);
        writer.writeAdditionalData(getPresencesByUserIdPostRequestBody.additionalData);
}
