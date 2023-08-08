import type {DriveItem} from '../../../../../models/driveItem';
import {serializeBaseDeltaFunctionResponse} from '../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeDriveItem} from '../../../../../models/serializeDriveItem';
import type {DeltaWithTokenResponse} from './deltaWithTokenResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaWithTokenResponse(writer: SerializationWriter, deltaWithTokenResponse: DeltaWithTokenResponse | undefined = {} as DeltaWithTokenResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaWithTokenResponse)
        writer.writeCollectionOfObjectValues<DriveItem>("value", deltaWithTokenResponse.value, serializeDriveItem);
}
