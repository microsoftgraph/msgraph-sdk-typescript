import {createDriveItemFromDiscriminatorValue} from '../../../../../models/createDriveItemFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {DriveItem} from '../../../../../models/driveItem';
import {serializeDriveItem} from '../../../../../models/serializeDriveItem';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
    }
}
