import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IpmtPostRequestBody} from './ipmtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpmtPostRequestBody(writer: SerializationWriter, ipmtPostRequestBody: IpmtPostRequestBody | undefined = {} as IpmtPostRequestBody) : void {
        writer.writeObjectValue<Json>("fv", ipmtPostRequestBody.fv, serializeJson);
        writer.writeObjectValue<Json>("nper", ipmtPostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("per", ipmtPostRequestBody.per, serializeJson);
        writer.writeObjectValue<Json>("pv", ipmtPostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("rate", ipmtPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("type", ipmtPostRequestBody.type, serializeJson);
        writer.writeAdditionalData(ipmtPostRequestBody.additionalData);
}
