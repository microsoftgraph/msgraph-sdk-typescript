import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Atan2PostRequestBody} from './atan2PostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAtan2PostRequestBody(atan2PostRequestBody: Atan2PostRequestBody | undefined = {} as Atan2PostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "xNum": n => { atan2PostRequestBody.xNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yNum": n => { atan2PostRequestBody.yNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
