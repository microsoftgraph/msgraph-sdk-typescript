import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {NominalPostRequestBody} from './nominalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNominalPostRequestBody(writer: SerializationWriter, nominalPostRequestBody: NominalPostRequestBody | undefined = {} as NominalPostRequestBody) : void {
        writer.writeObjectValue<Json>("effectRate", nominalPostRequestBody.effectRate, serializeJson);
        writer.writeObjectValue<Json>("npery", nominalPostRequestBody.npery, serializeJson);
        writer.writeAdditionalData(nominalPostRequestBody.additionalData);
}
