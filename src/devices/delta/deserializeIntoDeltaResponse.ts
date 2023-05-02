import {createDeviceFromDiscriminatorValue} from '../../models/createDeviceFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../models/deserializeIntoBaseDeltaFunctionResponse';
import {Device} from '../../models/device';
import {serializeDevice} from '../../models/serializeDevice';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<Device>(createDeviceFromDiscriminatorValue); },
    }
}
