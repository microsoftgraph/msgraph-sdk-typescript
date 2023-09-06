import { type UserAgent } from './userAgent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserAgent(writer: SerializationWriter, userAgent: UserAgent | undefined = {} as UserAgent) : void {
        writer.writeStringValue("applicationVersion", userAgent.applicationVersion);
        writer.writeStringValue("headerValue", userAgent.headerValue);
        writer.writeStringValue("@odata.type", userAgent.odataType);
        writer.writeAdditionalData(userAgent.additionalData);
}
