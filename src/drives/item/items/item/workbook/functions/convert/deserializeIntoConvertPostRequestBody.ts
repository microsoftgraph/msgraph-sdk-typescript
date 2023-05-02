import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ConvertPostRequestBody} from './convertPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConvertPostRequestBody(convertPostRequestBody: ConvertPostRequestBody | undefined = {} as ConvertPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fromUnit": n => { convertPostRequestBody.fromUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { convertPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "toUnit": n => { convertPostRequestBody.toUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
