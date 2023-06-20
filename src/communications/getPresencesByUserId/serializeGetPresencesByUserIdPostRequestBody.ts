import {GetPresencesByUserIdPostRequestBody} from './getPresencesByUserIdPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPresencesByUserIdPostRequestBody(getPresencesByUserIdPostRequestBody: GetPresencesByUserIdPostRequestBody | undefined = {} as GetPresencesByUserIdPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", getPresencesByUserIdPostRequestBody.ids);
        writer.writeAdditionalData(getPresencesByUserIdPostRequestBody.additionalData);
}
