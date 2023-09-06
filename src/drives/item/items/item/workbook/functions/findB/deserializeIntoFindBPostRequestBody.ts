import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type FindBPostRequestBody } from './findBPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFindBPostRequestBody(findBPostRequestBody: FindBPostRequestBody | undefined = {} as FindBPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "findText": n => { findBPostRequestBody.findText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startNum": n => { findBPostRequestBody.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "withinText": n => { findBPostRequestBody.withinText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
