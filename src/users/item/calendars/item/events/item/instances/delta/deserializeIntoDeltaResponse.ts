import {createEventFromDiscriminatorValue} from '../../../../../../../../models/createEventFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {Event} from '../../../../../../../../models/event';
import {serializeEvent} from '../../../../../../../../models/serializeEvent';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
    }
}
