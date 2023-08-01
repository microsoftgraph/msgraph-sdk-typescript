import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {YearFracPostRequestBody} from './yearFracPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoYearFracPostRequestBody(yearFracPostRequestBody: YearFracPostRequestBody | undefined = {} as YearFracPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { yearFracPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "endDate": n => { yearFracPostRequestBody.endDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { yearFracPostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
