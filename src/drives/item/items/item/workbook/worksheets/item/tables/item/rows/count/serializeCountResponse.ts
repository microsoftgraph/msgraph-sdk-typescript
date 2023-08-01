import type {CountResponse} from './countResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountResponse(writer: SerializationWriter, countResponse: CountResponse | undefined = {} as CountResponse) : void {
        writer.writeNumberValue("value", countResponse.value);
        writer.writeAdditionalData(countResponse.additionalData);
}
