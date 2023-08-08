import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ComplexPostRequestBody} from './complexPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplexPostRequestBody(complexPostRequestBody: ComplexPostRequestBody | undefined = {} as ComplexPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "iNum": n => { complexPostRequestBody.iNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "realNum": n => { complexPostRequestBody.realNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "suffix": n => { complexPostRequestBody.suffix = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
