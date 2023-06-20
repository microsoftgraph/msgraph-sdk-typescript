import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IrrPostRequestBody} from './irrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIrrPostRequestBody(irrPostRequestBody: IrrPostRequestBody | undefined = {} as IrrPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("guess", irrPostRequestBody.guess, serializeJson);
        writer.writeObjectValue<Json>("values", irrPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(irrPostRequestBody.additionalData);
}
