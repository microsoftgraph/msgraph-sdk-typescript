import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {FindPostRequestBody} from './findPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFindPostRequestBody(findPostRequestBody: FindPostRequestBody | undefined = {} as FindPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "findText": n => { findPostRequestBody.findText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startNum": n => { findPostRequestBody.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "withinText": n => { findPostRequestBody.withinText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
