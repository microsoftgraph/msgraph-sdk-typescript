import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Oct2DecPostRequestBody} from './oct2DecPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOct2DecPostRequestBody(oct2DecPostRequestBody: Oct2DecPostRequestBody | undefined = {} as Oct2DecPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { oct2DecPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
