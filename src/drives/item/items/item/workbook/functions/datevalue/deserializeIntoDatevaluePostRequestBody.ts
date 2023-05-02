import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DatevaluePostRequestBody} from './datevaluePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDatevaluePostRequestBody(datevaluePostRequestBody: DatevaluePostRequestBody | undefined = {} as DatevaluePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "dateText": n => { datevaluePostRequestBody.dateText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
