import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Bin2DecPostRequestBody} from './bin2DecPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBin2DecPostRequestBody(bin2DecPostRequestBody: Bin2DecPostRequestBody | undefined = {} as Bin2DecPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { bin2DecPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
