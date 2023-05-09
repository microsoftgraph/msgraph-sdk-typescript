import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FvschedulePostRequestBody} from './fvschedulePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFvschedulePostRequestBody(fvschedulePostRequestBody: FvschedulePostRequestBody | undefined = {} as FvschedulePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "principal": n => { fvschedulePostRequestBody.principal = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "schedule": n => { fvschedulePostRequestBody.schedule = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
