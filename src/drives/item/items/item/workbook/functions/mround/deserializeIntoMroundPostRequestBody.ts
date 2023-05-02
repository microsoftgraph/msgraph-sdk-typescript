import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MroundPostRequestBody} from './mroundPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMroundPostRequestBody(mroundPostRequestBody: MroundPostRequestBody | undefined = {} as MroundPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "multiple": n => { mroundPostRequestBody.multiple = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { mroundPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
