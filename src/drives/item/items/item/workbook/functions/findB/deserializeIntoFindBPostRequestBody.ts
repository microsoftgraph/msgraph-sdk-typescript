import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FindBPostRequestBody} from './findBPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFindBPostRequestBody(findBPostRequestBody: FindBPostRequestBody | undefined = {} as FindBPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "findText": n => { findBPostRequestBody.findText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startNum": n => { findBPostRequestBody.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "withinText": n => { findBPostRequestBody.withinText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
