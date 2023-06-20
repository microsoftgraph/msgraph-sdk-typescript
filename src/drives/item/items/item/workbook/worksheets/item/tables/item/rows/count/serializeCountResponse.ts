import {CountResponse} from './countResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountResponse(countResponse: CountResponse | undefined = {} as CountResponse, writer: SerializationWriter) : void {
        writer.writeNumberValue("value", countResponse.value);
        writer.writeAdditionalData(countResponse.additionalData);
}
