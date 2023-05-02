import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RatePostRequestBody} from './ratePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRatePostRequestBody(writer: SerializationWriter, ratePostRequestBody: RatePostRequestBody | undefined = {} as RatePostRequestBody) : void {
        writer.writeObjectValue<Json>("fv", ratePostRequestBody.fv, serializeJson);
        writer.writeObjectValue<Json>("guess", ratePostRequestBody.guess, serializeJson);
        writer.writeObjectValue<Json>("nper", ratePostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("pmt", ratePostRequestBody.pmt, serializeJson);
        writer.writeObjectValue<Json>("pv", ratePostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("type", ratePostRequestBody.type, serializeJson);
        writer.writeAdditionalData(ratePostRequestBody.additionalData);
}
