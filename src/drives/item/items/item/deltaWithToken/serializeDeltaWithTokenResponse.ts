import {DriveItem} from '../../../../../models/driveItem';
import {serializeBaseDeltaFunctionResponse} from '../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeDriveItem} from '../../../../../models/serializeDriveItem';
import {DeltaWithTokenResponse} from './deltaWithTokenResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaWithTokenResponse(deltaWithTokenResponse: DeltaWithTokenResponse | undefined = {} as DeltaWithTokenResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaWithTokenResponse)
        writer.writeCollectionOfObjectValues<DriveItem>("value", deltaWithTokenResponse.value, serializeDriveItem);
}
