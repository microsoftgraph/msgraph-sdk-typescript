import {SetSolidColorPostRequestBody} from './setSolidColorPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetSolidColorPostRequestBody(writer: SerializationWriter, setSolidColorPostRequestBody: SetSolidColorPostRequestBody | undefined = {} as SetSolidColorPostRequestBody) : void {
        writer.writeStringValue("color", setSolidColorPostRequestBody.color);
        writer.writeAdditionalData(setSolidColorPostRequestBody.additionalData);
}
