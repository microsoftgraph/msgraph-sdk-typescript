import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Days360PostRequestBody} from './days360PostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDays360PostRequestBody(days360PostRequestBody: Days360PostRequestBody | undefined = {} as Days360PostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endDate": n => { days360PostRequestBody.endDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "method": n => { days360PostRequestBody.method = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { days360PostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
