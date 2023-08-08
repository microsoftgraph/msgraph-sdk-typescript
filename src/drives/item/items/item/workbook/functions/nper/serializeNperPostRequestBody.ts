import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {NperPostRequestBody} from './nperPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNperPostRequestBody(writer: SerializationWriter, nperPostRequestBody: NperPostRequestBody | undefined = {} as NperPostRequestBody) : void {
        writer.writeObjectValue<Json>("fv", nperPostRequestBody.fv, serializeJson);
        writer.writeObjectValue<Json>("pmt", nperPostRequestBody.pmt, serializeJson);
        writer.writeObjectValue<Json>("pv", nperPostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("rate", nperPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("type", nperPostRequestBody.type, serializeJson);
        writer.writeAdditionalData(nperPostRequestBody.additionalData);
}
