import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CoupPcdPostRequestBody} from './coupPcdPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoupPcdPostRequestBody(coupPcdPostRequestBody: CoupPcdPostRequestBody | undefined = {} as CoupPcdPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("basis", coupPcdPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupPcdPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupPcdPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupPcdPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupPcdPostRequestBody.additionalData);
}
