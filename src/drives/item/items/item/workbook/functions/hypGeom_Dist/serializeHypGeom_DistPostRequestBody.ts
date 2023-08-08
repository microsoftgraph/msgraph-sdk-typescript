import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {HypGeom_DistPostRequestBody} from './hypGeom_DistPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHypGeom_DistPostRequestBody(writer: SerializationWriter, hypGeom_DistPostRequestBody: HypGeom_DistPostRequestBody | undefined = {} as HypGeom_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", hypGeom_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("numberPop", hypGeom_DistPostRequestBody.numberPop, serializeJson);
        writer.writeObjectValue<Json>("numberSample", hypGeom_DistPostRequestBody.numberSample, serializeJson);
        writer.writeObjectValue<Json>("populationS", hypGeom_DistPostRequestBody.populationS, serializeJson);
        writer.writeObjectValue<Json>("sampleS", hypGeom_DistPostRequestBody.sampleS, serializeJson);
        writer.writeAdditionalData(hypGeom_DistPostRequestBody.additionalData);
}
