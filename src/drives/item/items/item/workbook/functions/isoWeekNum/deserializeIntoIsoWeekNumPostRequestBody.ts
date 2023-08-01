import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsoWeekNumPostRequestBody} from './isoWeekNumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsoWeekNumPostRequestBody(isoWeekNumPostRequestBody: IsoWeekNumPostRequestBody | undefined = {} as IsoWeekNumPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "date": n => { isoWeekNumPostRequestBody.date = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
