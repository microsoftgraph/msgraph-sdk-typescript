import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AtanPostRequestBody} from './atanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAtanPostRequestBody(atanPostRequestBody: AtanPostRequestBody | undefined = {} as AtanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { atanPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
