import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Log10PostRequestBody} from './log10PostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLog10PostRequestBody(log10PostRequestBody: Log10PostRequestBody | undefined = {} as Log10PostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { log10PostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
