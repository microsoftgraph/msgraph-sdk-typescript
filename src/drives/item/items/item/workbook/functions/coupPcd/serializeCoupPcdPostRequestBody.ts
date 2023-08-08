import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CoupPcdPostRequestBody} from './coupPcdPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoupPcdPostRequestBody(writer: SerializationWriter, coupPcdPostRequestBody: CoupPcdPostRequestBody | undefined = {} as CoupPcdPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", coupPcdPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupPcdPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupPcdPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupPcdPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupPcdPostRequestBody.additionalData);
}
