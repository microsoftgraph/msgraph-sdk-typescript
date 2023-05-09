import {createDriveItemFromDiscriminatorValue} from '../../../../../models/createDriveItemFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {DriveItem} from '../../../../../models/driveItem';
import {serializeDriveItem} from '../../../../../models/serializeDriveItem';
import {DeltaWithTokenResponse} from './deltaWithTokenResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaWithTokenResponse(deltaWithTokenResponse: DeltaWithTokenResponse | undefined = {} as DeltaWithTokenResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaWithTokenResponse),
        "value": n => { deltaWithTokenResponse.value = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
    }
}
